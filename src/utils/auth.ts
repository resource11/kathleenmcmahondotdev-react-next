const encoder = new TextEncoder();
const decoder = new TextDecoder();

export interface TokenPayload {
	iat: number;
}

export async function timingSafeEqual(a: string, b: string): Promise<boolean> {
	const aBytes = encoder.encode(a);
	const bBytes = encoder.encode(b);
	let mismatch = aBytes.length === bBytes.length ? 0 : 1;
	const len = Math.max(aBytes.length, bBytes.length);
	for (let i = 0; i < len; i++) {
		mismatch |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
	}
	return mismatch === 0;
}

function toBase64Url(bytes: ArrayBuffer | Uint8Array): string {
	const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
	let binary = '';
	for (const byte of u8) binary += String.fromCharCode(byte);
	return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str: string): Uint8Array {
	const padded = str
		.replace(/-/g, '+')
		.replace(/_/g, '/')
		.padEnd(Math.ceil(str.length / 4) * 4, '=');
	const binary = atob(padded);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}

async function importKey(secret: string): Promise<CryptoKey> {
	return crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign', 'verify'],
	);
}

export async function signToken(payload: TokenPayload, secret: string): Promise<string> {
	const key = await importKey(secret);
	const payloadB64 = toBase64Url(encoder.encode(JSON.stringify(payload)));
	const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(payloadB64));
	return `${payloadB64}.${toBase64Url(sig)}`;
}

export async function verifyToken(token: string, secret: string): Promise<TokenPayload | null> {
	const parts = token.split('.');
	if (parts.length !== 2) return null;
	const [payloadB64, sigB64] = parts;

	let sig: Uint8Array;
	try {
		sig = fromBase64Url(sigB64);
	} catch {
		return null;
	}

	const key = await importKey(secret);
	const isValid = await crypto.subtle.verify('HMAC', key, sig, encoder.encode(payloadB64));
	if (!isValid) return null;

	try {
		const payload = JSON.parse(decoder.decode(fromBase64Url(payloadB64))) as TokenPayload;
		if (typeof payload.iat !== 'number') return null;
		return payload;
	} catch {
		return null;
	}
}
