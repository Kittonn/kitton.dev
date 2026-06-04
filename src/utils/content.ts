import { getCollection, type CollectionEntry } from "astro:content";

const publishedTime = (post: CollectionEntry<"blogs">) =>
  new Date(post.data.publishedDate).getTime();

export const getSortedBlogs = async () => {
  const blogs = await getCollection("blogs", ({ data }) => {
    if (data.draft) return false;

    return (
      import.meta.env.DEV ||
      Date.now() >= new Date(data.publishedDate).getTime()
    );
  });

  return blogs.sort((a, b) => publishedTime(b) - publishedTime(a));
};
