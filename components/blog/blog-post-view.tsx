"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import type { BlogPostMeta } from "@/lib/types";

type BlogPostViewProps = {
  metaEn: BlogPostMeta;
  metaTr: BlogPostMeta;
  sourceEn: MDXRemoteSerializeResult;
  sourceTr: MDXRemoteSerializeResult;
};

export default function BlogPostView({
  metaEn,
  metaTr,
  sourceEn,
  sourceTr,
}: BlogPostViewProps) {
  const { language } = useLanguage();
  const meta = language === "tr" ? metaTr : metaEn;
  const source = language === "tr" ? sourceTr : sourceEn;
  const t = translations[language].blog;

  return (
    <article className="max-w-[42rem] mx-auto">
      <Link
        href="/blog"
        className="text-sm text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
      >
        ← {t.backToBlog}
      </Link>

      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{meta.title}</h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <time dateTime={meta.date}>{meta.date}</time>
      </div>

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

      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg sm:h-80">
        <Image src={meta.coverImage} alt={meta.title} fill className="object-cover" />
      </div>

      <div className="prose dark:prose-invert prose-gray mt-8 max-w-none">
        <MDXRemote {...source} />
      </div>
    </article>
  );
}
