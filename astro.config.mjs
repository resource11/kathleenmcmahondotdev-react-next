import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import embeds from 'astro-embed/integration';
import icon from 'astro-icon';
import { remarkReactLive } from './src/plugins/remark-react-live.mjs';

export default defineConfig({
	site: 'https://kathleenmcmahon-react-next.netlify.app',
	markdown: {
		syntaxHighlight: 'prism',
		gfm: true,
	},
	integrations: [
		embeds(),
		icon(),
		mdx({
			drafts: true,
			// remarkPlugins: [remarkReactLive],
		}),
		react({
			include: ['**/react/**'],
		}),
		solid({
			include: ['**/solid/***'],
		}),
	],
	image: {
		service: sharpImageService(),
	},
	// scopedStyleStrategy: 'where',
	build: {
		inlineStylesheets: 'never',
	},
	vite: {
		test: {
			globals: true,
			environment: 'jsdom', // Use jsdom for browser environment simulation
			setupFiles: ['./src/test/setup.ts'], // Path to the test setup file
			// Add a reference to Vitest types for TypeScript if needed
			/// <reference types="vitest" />
		},
	},
});
