/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly SITE_PASSWORD: string;
	readonly AUTH_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
