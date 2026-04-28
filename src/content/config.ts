import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const talks = defineCollection({
	type: 'content',
	schema: z.object({
		event: z.string(),
		eventDate: z.string(),
		eventLocation: z.string(),
		eventURL: z.url(),
		talkName: z.string(),
		talkURL: z.url().optional(),
		talkType: z.enum(['Talk', 'Workshop']),
	}),
});
export const collections = { talks };
