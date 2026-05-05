import type { APIRoute } from 'astro';
import { signToken, timingSafeEqual } from '../../../utils/auth';

export const prerender = false;

const COOKIE_NAME = 'portfolio_auth';
const SESSION_MAX_AGE = 900;
const DEFAULT_REDIRECT = '/private/';
const FAILURE_DELAY_MS = 500;

function validateReturn(returnUrl: string | null): string {
	if (!returnUrl) return DEFAULT_REDIRECT;
	try {
		const parsed = new URL(returnUrl, 'https://placeholder.invalid');
		if (parsed.origin !== 'https://placeholder.invalid') return DEFAULT_REDIRECT;
		if (!parsed.pathname.startsWith('/private/')) return DEFAULT_REDIRECT;
		return parsed.pathname + parsed.search;
	} catch {
		return DEFAULT_REDIRECT;
	}
}

function json(body: unknown, status: number): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const POST: APIRoute = async ({ request, cookies }) => {
	const password = import.meta.env.SITE_PASSWORD;
	const secret = import.meta.env.AUTH_SECRET;

	if (!password || !secret) {
		return json({ error: 'server_misconfigured' }, 500);
	}

	const formData = await request.formData();
	const submitted = String(formData.get('password') ?? '');
	const returnUrl = validateReturn(String(formData.get('return') ?? '') || null);

	const ok = await timingSafeEqual(submitted, password);
	if (!ok) {
		await new Promise((resolve) => setTimeout(resolve, FAILURE_DELAY_MS));
		return json({ error: 'invalid' }, 401);
	}

	const token = await signToken({ iat: Date.now() }, secret);

	cookies.set(COOKIE_NAME, token, {
		httpOnly: true,
		secure: import.meta.env.PROD,
		sameSite: 'lax',
		maxAge: SESSION_MAX_AGE,
		path: '/',
	});

	return json({ redirect: returnUrl }, 200);
};
