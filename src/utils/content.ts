import { getCollection, type CollectionEntry } from "astro:content";

const effectiveTime = (post: CollectionEntry<"blogs">) =>
  new Date(post.data.updatedDate ?? post.data.publishedDate).getTime();

const getVisibleBlogs = () =>
  getCollection("blogs", ({ data }: CollectionEntry<"blogs">) => {
    if (data.draft) return false;

    return (
      import.meta.env.DEV ||
      Date.now() >= effectiveTime({ data } as CollectionEntry<"blogs">)
    );
  });

export const getSortedBlogs = async () => {
  const blogs = await getVisibleBlogs();
  return blogs.sort((a, b) => effectiveTime(b) - effectiveTime(a));
};

export const getUniqueTags = async () => {
  const blogs = await getVisibleBlogs();
  const tags = new Set<string>(blogs.flatMap(blog => blog.data.tags ?? []));

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
};
