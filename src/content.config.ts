import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const BLOG_PATH = "./src/content/blogs";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: BLOG_PATH }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blogs };
