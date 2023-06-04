// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    slug: z.string(),
    date: z.date(),
    title: z.string(),
    author: z.string(),
    description: z.string().max(200),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isPublished: z.boolean(),
    isHidden: z.boolean(),
    isFeatured: z.boolean(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'post': postCollection,
};

// // 2. Define a `type` and `schema` for each collection
// const data = defineCollection({
//     type: 'data', // v2.5.0 and later
//     schema: z.object({
//       recentSpeaking: z.array(z.object({
//         id: z.string(),
//         name: z.string(),
//         event: z.string(),
//         link: z.string(),
//         tags: z.string(),
//         cta: z.string(),
//         ctaAria: z.string(),
//       })),
//       portfolioList: z.array(z.object({
//         id: z.string(),
//         name: z.string(),
//         link: z.string(),
//         image: z.string(),
//         cta: z.string(),
//       })),
//     })
//   });
