import Layout from "@/components/Layout";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import StickyNote from "@/components/portfolio/StickyNote";
import { getAllPostIds, getPostData } from "@/lib/portfolio";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  YoutubeEmbed,
  ImageWithCaption,
  Footnote,
  Video,
  VideoAmbient,
} from "@/components/blog";

const components = {
  YoutubeEmbed,
  ImageWithCaption,
  Footnote,
  Video,
  VideoAmbient,
  SyntaxHighlighter,
};

export default function Post({ postData }) {
  const metaTitle = `${postData.title} | Andrew Millen Portfolio`;

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={postData.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>
      <main className="py-12 md:py-24 border-b border-neutral-300 dark:border-neutral-800">
        <article>
          <div className="container">
            <Link className="textLink text-lg" href={`/portfolio`}>
              ← All Case Studies
            </Link>

            <div className="mt-16">
              <div className="bg-yellow-200 dark:bg-neutral-800 inline py-1 px-2 h4 text-neutral-800 dark:text-neutral-400">
                Case Study: {postData.tag}
              </div>
              <h1 className="font-bold text-4xl my-4 md:text-5xl lg:text-6xl xl:text-7xl md:text-left max-w-lg lg:max-w-5xl leading-tight">
                {postData.title}
              </h1>
            </div>
            <hr className="max-w-lg lg:max-w-xl mt-12 border-neutral-200 dark:border-neutral-800" />

            <div className="py-8 lg:py-16">
              <p className="prose prose-neutral prose-lg 2xl:prose-xl dark:prose-invert prose-p:leading-relaxed">
                {postData.summary}
              </p>

              <h3 className="h4 mb-2 mt-8 lg:mt-16">Outcomes</h3>

              <div className="flex flex-wrap">
                {postData.outcomes.map((outcome, index) => (
                  <div className={"mb-2 mr-2"} key={index}>
                    <StickyNote content={outcome} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pt-12 prose prose-neutral prose-lg 2xl:prose-xl dark:prose-invert prose-blockquote:font-normal prose-blockquote:my-16 prose-blockquote:text-neutral-500
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
