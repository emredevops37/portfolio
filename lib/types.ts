import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage: string;
};
