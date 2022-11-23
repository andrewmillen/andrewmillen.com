import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import remarkStringify from "remark-stringify/lib";
// import { remark } from "remark";
// import remarkRehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";
// import rehypeRaw from "rehype-raw";
// import remarkUnwrapImages from "remark-unwrap-images";
// import html from "remark-html";
// const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const files = fs.readdirSync(path.join("posts"));

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

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     // .use(html)
//     .use(remarkUnwrapImages)
//     .use(remarkRehype, { allowDangerousHtml: true })
//     .use(rehypeRaw)
//     .use(rehypeStringify)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
