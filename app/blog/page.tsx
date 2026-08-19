import SectionHeading from "@/components/section-heading";
import BlogList from "@/components/blog/blog-list";
import { getAllBlogPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Blog | Emre",
  description: "Deep dives into the projects I've worked on.",
};

export default function BlogPage() {
  const enPosts = getAllBlogPostsMeta("en");
  const trMetaBySlug = new Map(
    getAllBlogPostsMeta("tr").map((meta) => [meta.slug, meta])
  );

  const posts = enPosts.map((en) => ({
    slug: en.slug,
    en,
    tr: trMetaBySlug.get(en.slug)!,
  }));

  return (
    <main className="flex flex-col items-center px-4 mb-28">
      <SectionHeading>Blog</SectionHeading>
      <BlogList posts={posts} />
    </main>
  );
}
