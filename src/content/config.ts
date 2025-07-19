import { defineCollection, z } from 'astro:content';

const essaysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// 他のコレクションも同様に定義できます
// const shiftedCollection = defineCollection({ ... });

export const collections = {
  'essays': essaysCollection,
};
