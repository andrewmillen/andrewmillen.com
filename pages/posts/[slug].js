import Layout from "@/components/Layout";
import Head from "next/head";
import AuthorBio from "@/components/blog/AuthorBio";
import RssButton from "@/components/RssButton";
import Link from "next/link";
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
      <main className="py-12 md:py-24 border-b border-neutral-300 dark:border-neutral-800">
        <RssButton />
        <article>
          <div className="container">
            <div className="text-left">
              <Link className="textLink text-lg" href={`/posts/`}>
                ← All Posts
              </Link>
              <h1 className="font-bold text-3xl my-4 md:text-4xl lg:text-5xl xl:text-6xl max-w-lg lg:max-w-5xl leading-tight">
                {postData.title}
              </h1>
              <div className="block h4 mt-2 mb-4 max-w-lg lg:max-w-5xl">
                Published{" "}
                {
                  <time dateTime={postData.date}>
                    {format(parseISO(postData.date), "LLLL d, yyyy")}
                  </time>
                }
              </div>
            </div>
            <hr className="max-w-lg lg:max-w-xl mt-12 border-neutral-200 dark:border-neutral-800" />
          </div>
          <div className="container">
            <div
              className="pt-12 prose prose-neutral prose-lg 2xl:prose-xl dark:prose-invert prose-blockquote:font-normal prose-blockquote:my-12 prose-blockquote:text-neutral-500
              prose-p:leading-relaxed
              prose-h2:text-3xl
              prose-a:text-link-light-default
              hover:prose-a:text-link-light-hover
              dark:prose-a:text-link-dark-default
              dark:hover:prose-a:text-link-dark-hover
              prose-a:underline-offset-4
              prose-a:font-normal
              "
            >
              <MDXRemote {...postData.mdxSource} components={components} />
            </div>
          </div>
        </article>

        <AuthorBio />
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
