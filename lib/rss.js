import fs from "fs";
import dateFormat from "dateformat";
import { getSortedBlogPosts } from "@/lib/posts";
import RSS from "rss";

export default async function getRSS() {
  const siteURL = "https://andrewmillen.com";
  const allBlogs = getSortedBlogPosts();

  const feed = new RSS({
    title: "Andrew Millen",
    description: "Short posts about design, life.",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Andrew Millen`,
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.frontMatter.title,
      url: `${siteURL}/posts/${post.slug}`,
      date: dateFormat(post.frontMatter.date, "ddd, dd mmm yyyy, hh:MM:ss l"),
      description: post.frontMatter.description,
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
