import Layout from "@/components/Layout";
import Head from "next/head";
import AuthorBio from "@/components/blog/AuthorBio";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import { YoutubeEmbed, ImageWithCaption, Footnote } from "@/components/blog";

const components = {
  YoutubeEmbed,
  ImageWithCaption,
  Footnote,
  SyntaxHighlighter,
  Image,
};

export default function Post({ postData }) {
  const metaTitle = `${postData.title} | Andrew Millen | Blog`;

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={postData.description} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.thumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>
      <main className="py-12 lg:py-20 border-b border-neutral-300 dark:border-neutral-800">
        <article>
          <div className="container">
            <div className="text-left">
              <Link className="textLink text-lg" href={`/posts/`}>
                <span className="font-degular">←</span> All Posts
              </Link>
              <h1 className="mt-8 md:mt-16 h1 max-w-3xl lg:max-w-5xl">
                {postData.title}
              </h1>
              <div className="block h4 mt-2 sm:mt-4 max-w-lg lg:max-w-5xl">
                Published{" "}
                {
                  <time dateTime={postData.date}>
                    {format(parseISO(postData.date), "LLLL d, yyyy")}
                  </time>
                }
              </div>
            </div>

            <hr className="max-w-sm mt-8 lg:mt-16 border-neutral-200 dark:border-neutral-800" />
          </div>
          <div className="container">
            <div className="pt-12 prose prose-neutral prose-lg 2xl:prose-xl dark:prose-invert">
              <MDXRemote {...postData.mdxSource} components={components} />
            </div>
          </div>
        </article>

        <AuthorBio />

        <div className="container pt-20">
          <Button
            icon="rss"
            label="Subscribe via RSS"
            url="https://andrewmillen.com/feed.xml"
            background="bg-orange-50 hover:bg-orange-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
