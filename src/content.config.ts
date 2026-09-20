import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const contents = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/contents",
  }),

  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  contents,
};
