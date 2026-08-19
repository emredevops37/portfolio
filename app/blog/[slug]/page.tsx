import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import BlogPostView from "@/components/blog/blog-post-view";
import { getBlogPostMeta, getBlogPostRaw, getBlogSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  if (!getBlogSlugs().includes(params.slug)) {
    return {};
  }
  const meta = getBlogPostMeta(params.slug, "en");
  return {
    title: `${meta.title} | Emre`,
    description: meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  if (!getBlogSlugs().includes(slug)) {
    notFound();
  }

  const metaEn = getBlogPostMeta(slug, "en");
  const metaTr = getBlogPostMeta(slug, "tr");

  const [sourceEn, sourceTr] = await Promise.all([
    serialize(getBlogPostRaw(slug, "en")),
    serialize(getBlogPostRaw(slug, "tr")),
  ]);

  return (
    <main className="flex flex-col items-center px-4 mb-28">
      <BlogPostView
        metaEn={metaEn}
        metaTr={metaTr}
        sourceEn={sourceEn}
        sourceTr={sourceTr}
      />
    </main>
  );
}
