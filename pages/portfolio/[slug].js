import Layout from "@/components/Layout";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPostIds, getPostData } from "@/lib/portfolio";
import { MDXRemote } from "next-mdx-remote";
import * as contentComponents from "@/components/blog";
import Image from "next/image";
import CaseStudyProblemStatement from "@/components/portfolio/CaseStudyProblemStatement";
import CaseStudyChapter from "@/components/portfolio/CaseStudyChapter";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";

const components = {
  contentComponents,
  CaseStudyProblemStatement,
  CaseStudyChapter,
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
      <main className="py-12 md:py-24">
        <article>
          <div className="container">
            <Link className="textLink text-lg" href={`/portfolio`}>
              ← All Case Studies
            </Link>

            <div className="mt-16">
              <div className="inline-block uppercase bg-yellow-200 dark:bg-yellow-300 leading-none font-degular font-semibold px-3 py-1 rounded-full text-md text-neutral-900">
                {postData.tag}
              </div>
              <h1 className="font-bold text-4xl my-4 md:text-5xl lg:text-6xl xl:text-7xl md:text-left max-w-lg lg:max-w-none leading-tight">
                {postData.title}
              </h1>
            </div>
            <hr className="max-w-lg lg:max-w-xl mt-12 border-neutral-200 dark:border-neutral-800" />

            <div className="py-8 lg:py-16">
              <p className="prose prose-neutral prose-lg dark:prose-invert prose-p:leading-relaxed">
                {postData.summary}
              </p>
            </div>

            <Image
              src={postData.hero}
              width="1200"
              height="600"
              className="my-0 md:my-12 lg:my-24"
              alt=""
              priority
            />

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
              max-w-none
              "
            >
              <MDXRemote {...postData.mdxSource} components={components} />
            </div>
          </div>
        </article>
      </main>

      <TestimonialSlider />
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
