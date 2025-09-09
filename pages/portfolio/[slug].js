import * as contentComponents from "@/components/blog";

import { getAllPostIds, getPostData } from "@/lib/portfolio";

import Callout from "@/components/portfolio/Callout";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import RelatedCaseStudy from "@/components/portfolio/RelatedCaseStudy";
import Tag from "@/components/Tag";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";
import { getSortedCaseStudies } from "@/lib/portfolio";

const components = {
  contentComponents,
  ProblemStatement,
  Callout,
  Image,
  Link,
};

export default function Post({ postData, caseStudies }) {
  const metaTitle = `${postData.title} | Andrew Millen | Portfolio`;

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={postData.summary} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={postData.summary} />
        <meta property="og:image" content={postData.og} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>
      <main className="py-12 2xl:mb-32 lg:pt-20">
        <article>
          <div className="container">
            <Link className="textLink text-lg" href={`/portfolio`}>
              <span className="font-display">←</span> All Case Studies
            </Link>

            <div className="mt-8 md:mt-16">
              <Tag content={postData.tag} />

              <h1 className="mt-2 h1">{postData.title}</h1>
            </div>

            <div className="py-8">
              <p className="text-lg leading-relaxed max-w-[65ch] text-neutral-700 dark:text-neutral-100 mb-8">
                {postData.summary}
              </p>
            </div>

            <Image
              src={postData.hero}
              width="1200"
              height="600"
              className="my-0 lg:my-12"
              alt=""
              priority
              quality="100"
            />

            <div
              className="pt-12 prose prose-neutral prose-lg dark:prose-invert prose-blockquote:font-normal prose-blockquote:my-16 prose-blockquote:text-neutral-500
              prose-p:leading-relaxed
              prose-h2:text-3xl
              prose-a:text-link-light-default
              prose-a:hover:text-link-light-hover
              dark:prose-a:text-link-dark-default
              dark:prose-a:hover:text-link-dark-hover
              prose-a:underline-offset-4
              prose-a:font-normal
              prose-quoteless
              max-w-none
              "
            >
              <MDXRemote {...postData.mdxSource} components={components} />
            </div>
          </div>
        </article>
      </main>

      {caseStudies.map((caseStudy, index) =>
        caseStudy.frontMatter.title == postData.related ? (
          <RelatedCaseStudy key={index} postData={caseStudy} />
        ) : null
      )}

      <TestimonialSlider />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const caseStudies = getSortedCaseStudies();

  return {
    props: {
      postData,
      caseStudies,
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
