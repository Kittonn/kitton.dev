import { getCollection, type CollectionEntry } from "astro:content";

const getVisibleBlogs = () =>
  getCollection("blogs", ({ data }: CollectionEntry<"blogs">) => {
    if (data.draft) return false;

    return (
      import.meta.env.DEV ||
      Date.now() >= new Date(data.publishedDate).getTime()
    );
  });

export const getSortedBlogs = async () => {
  const blogs = await getVisibleBlogs();
  return blogs.sort(
    (a, b) =>
      new Date(b.data.publishedDate).getTime() -
      new Date(a.data.publishedDate).getTime()
  );
};

export const getUniqueTags = async () => {
  const blogs = await getVisibleBlogs();
  const tags = new Set<string>(blogs.flatMap(blog => blog.data.tags ?? []));

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
};
