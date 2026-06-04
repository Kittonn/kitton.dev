import rss from "@astrojs/rss";
import { getSortedBlogs } from "../utils/content";
import { config } from "../config";

export async function GET() {
  const blogs = await getSortedBlogs();

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: blogs.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/blogs/${post.id}`,
    })),
  });
}
