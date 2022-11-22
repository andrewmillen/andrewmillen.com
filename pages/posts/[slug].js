import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
// import { getAllPostIds, getPostData } from "@/lib/posts";
import Footer from "@/components/Footer";
import Link from "next/link";
import PostDate from "@/components/PostDate";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

import Button from "@/components/button";

const components = { Button, SyntaxHighlighter };

export default function Post({
  frontMatter: { title, description, thumbnailUrl, date },
  mdxSource,
}) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>
      <main>
        <article>
          <div className="container">
            <div className="text-left">
              <Link className="textLink text-lg" href={`/posts/`}>
                ← All Posts
              </Link>
              <h1 className="font-bold text-3xl my-4 md:text-4xl lg:text-5xl xl:text-6xl md:text-left max-w-lg lg:max-w-5xl leading-tight">
                {title}
              </h1>
              <div className="block uppercase tracking-widest font-semibold text-neutral-600 dark:text-neutral-500 text-sm mt-2 mb-4 max-w-lg lg:max-w-5xl md:text-left">
                Published {<PostDate dateString={date} />}
              </div>
            </div>
            <hr className="max-w-lg lg:max-w-xl mt-12 border-neutral-200 dark:border-neutral-800" />
          </div>
          <div className="container">
            <div
              className="pt-12 prose prose-neutral prose-lg md:prose-xl dark:prose-invert prose-blockquote:text-neutral-500
              prose-p:leading-relaxed
              prose-h2:text-3xl
              prose-a:text-link-light-default
              hover:prose-a:text-link-light-hover
              dark:prose-a:text-link-dark-default
              dark:hover:prose-a:text-link-dark-hover
              prose-a:underline-offset-4
              "
            />
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </article>

        <aside className="text-left mt-16 md:mt-24 lg:mt-32 container">
          <Image
            src="/andrew-millen.jpg"
            width={75}
            height={75}
            alt="Andrew looking suave in a leather jacket"
            className="rounded-full mb-4"
          />
          <p className="text-lg md:text-xl leading-normal text-neutral-700 dark:text-neutral-400 max-w-2xl">
            Andrew Millen is a hybrid UI/UX designer with a background in
            copywriting and front-end development.{" "}
            <Link href="/" className="textLink">
              See some of his work
            </Link>
            .
          </p>
        </aside>
      </main>
      <Footer />
    </Layout>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
