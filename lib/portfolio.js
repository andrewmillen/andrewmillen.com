import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join("content/case_studies");

export function getSortedCaseStudies() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/case_studies", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts.sort((a, b) => {
    if (a.frontMatter.order > b.frontMatter.order) return 1;
    if (a.frontMatter.order < b.frontMatter.order) return -1;

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
