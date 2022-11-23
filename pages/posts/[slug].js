import Layout from "@/components/Layout";
import Head from "next/head";
import AuthorBio from "@/components/AuthorBio";
import Footer from "@/components/Footer";
import Link from "next/link";
import PostDate from "@/components/PostDate";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import { YoutubeEmbed, ImageWithCaption } from "@/components/blog";

const components = { YoutubeEmbed, ImageWithCaption, SyntaxHighlighter };

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Blog</title>
        <meta name="description" content={postData.description} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.thumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>
      <main className="py-12 md:py-24 border-b border-neutral-300 dark:border-neutral-800">
        <article>
          <div className="container">
            <div className="text-left">
              <Link className="textLink text-lg" href={`/posts/`}>
                ← All Posts
              </Link>
              <h1 className="font-bold text-3xl my-4 md:text-4xl lg:text-5xl xl:text-6xl md:text-left max-w-lg lg:max-w-5xl leading-tight">
                {postData.title}
              </h1>
              <div className="block uppercase tracking-widest font-semibold text-neutral-600 dark:text-neutral-500 text-sm mt-2 mb-4 max-w-lg lg:max-w-5xl md:text-left">
                Published {<PostDate dateString={postData.date} />}
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
            >
              <MDXRemote {...postData.mdxSource} components={components} />
            </div>
          </div>
        </article>

        <AuthorBio />
      </main>
      <Footer />
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
