import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostMeta } from "./types";

export type Locale = "en" | "tr";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function readPostFile(slug: string, locale: Locale) {
  const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getBlogPostMeta(slug: string, locale: Locale): BlogPostMeta {
  const { data } = readPostFile(slug, locale);
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    tags: data.tags ?? [],
    coverImage: data.coverImage,
  };
}

export function getBlogPostRaw(slug: string, locale: Locale): string {
  const { content } = readPostFile(slug, locale);
  return content;
}

export function getAllBlogPostsMeta(locale: Locale): BlogPostMeta[] {
  return getBlogSlugs()
    .map((slug) => getBlogPostMeta(slug, locale))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
