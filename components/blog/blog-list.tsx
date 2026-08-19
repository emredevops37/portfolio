"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import type { BlogPostMeta } from "@/lib/types";

type BlogListProps = {
  posts: { slug: string; en: BlogPostMeta; tr: BlogPostMeta }[];
};

export default function BlogList({ posts }: BlogListProps) {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[50rem] mx-auto">
      {posts.map((post, index) => {
        const meta = post[language];

        return (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={meta.coverImage}
                  alt={meta.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold dark:text-white">
                  {meta.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {meta.excerpt}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
