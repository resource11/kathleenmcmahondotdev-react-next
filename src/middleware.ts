import { defineMiddleware } from 'astro:middleware';
import { signToken, verifyToken } from './utils/auth';

const COOKIE_NAME = 'portfolio_auth';
const SESSION_MAX_AGE = 900;

export const onRequest = defineMiddleware(async (context, next) => {
	const { url, cookies, redirect } = context;
	const { pathname } = url;

	if (pathname.startsWith('/api/auth/')) {
		return next();
	}

	const isPrivate = pathname === '/private' || pathname.startsWith('/private/');

	if (isPrivate) {
		const token = cookies.get(COOKIE_NAME)?.value;
		const secret = import.meta.env.AUTH_SECRET;

		const gateUrl = (() => {
			const target = new URL('/about', url);
			target.searchParams.set('gate', 'portfolio');
			target.searchParams.set('return', pathname + url.search);
			return target.pathname + target.search;
		})();

		if (!token || !secret) {
			return redirect(gateUrl, 302);
		}

		const payload = await verifyToken(token, secret);
		if (!payload) {
			return redirect(gateUrl, 302);
		}

		const newToken = await signToken({ iat: Date.now() }, secret);
		cookies.set(COOKIE_NAME, newToken, {
			httpOnly: true,
			secure: import.meta.env.PROD,
			sameSite: 'lax',
			maxAge: SESSION_MAX_AGE,
			path: '/',
		});

		const response = await next();
		response.headers.set('X-Robots-Tag', 'noindex, nofollow');
		return response;
	}

	if (cookies.has(COOKIE_NAME)) {
		cookies.delete(COOKIE_NAME, { path: '/' });
	}

	return next();
});
