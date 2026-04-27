import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		date: z.date(),
		title: z.string(),
		author: z.string(),
		description: z.string().max(200),
		excerpt: z.string().max(143),
		tags: z.array(z.string()),
		featuredImage: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		isPublished: z.boolean(),
		isHidden: z.boolean(),
		isFeatured: z.boolean(),
		layout: z.string().optional(),
	}),
});

const dataYMLCollection = defineCollection({
	loader: glob({ pattern: '*.{yml,yaml}', base: './src/content/dataYML' }),
	schema: ({ image: img }) =>
		z.object({
			recentSpeaking: z.array(
				z.object({
					id: z.string(),
					name: z.string(),
					event: z.string(),
					link: z.string(),
					image: img(),
					cta: z.string(),
					ctaAria: z.string(),
				}),
			),
			portfolioList: z.array(
				z.object({
					id: z.string(),
					name: z.string(),
					link: z.string(),
					image: img(),
					cta: z.string(),
				}),
			),
		}),
});

const talksCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
	schema: z.object({
		event: z.string(),
		eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected YYYY-MM-DD'),
		eventLocation: z.string(),
		eventURL: z.url(),
		talkAnnounced: z.boolean(),
		talkName: z.string(),
		talkURL: z.url().or(z.literal('')),
		talkType: z.enum(['Talk', 'Workshop', 'Lightning Talk', 'Panel']),
	}),
});

export const collections = {
	blog: blogCollection,
	dataYML: dataYMLCollection,
	talks: talksCollection,
};
