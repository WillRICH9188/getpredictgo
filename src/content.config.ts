import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'zh-cn', 'hi']),
    category: z.enum(['basics', 'how-to', 'sports', 'politics', 'finance', 'data']),
    pubDate: z.coerce.date(),
    keyword: z.string().optional(),
    source: z.string().optional(), // 數據來源（如 Polymarket / Kalshi + 抓取日期）
  }),
});

export const collections = { articles };
