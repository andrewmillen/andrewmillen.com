import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join("posts");

export function getSortedPostsData() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts.sort((a, b) => {
    if (a.frontMatter.date > b.frontMatter.date) return -1;
    if (a.frontMatter.date < b.frontMatter.date) return 1;

    return 0;
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content);

  return {
    slug,
    mdxSource,
    ...matterResult.data,
  };
}

export function getAllPostIds() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
}
