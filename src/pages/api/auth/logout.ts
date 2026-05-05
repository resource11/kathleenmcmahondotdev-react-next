import type { APIRoute } from 'astro';

export const prerender = false;

const COOKIE_NAME = 'portfolio_auth';

const handler: APIRoute = async ({ cookies }) => {
	cookies.delete(COOKIE_NAME, { path: '/' });
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

export const GET = handler;
export const POST = handler;
