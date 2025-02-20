import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getPostData } from "@/lib/portfolio";
import { MDXRemote } from "next-mdx-remote";
import * as contentComponents from "@/components/blog";
import Image from "next/image";
import Tag from "@/components/Tag";
import CaseStudyProblemStatement from "@/components/portfolio/CaseStudyProblemStatement";
import CaseStudyChapter from "@/components/portfolio/CaseStudyChapter";
import CaseStudyCallout from "@/components/portfolio/CaseStudyCallout";
import CaseStudyBlockquote from "@/components/portfolio/CaseStudyBlockquote";
import RelatedCaseStudy from "@/components/portfolio/RelatedCaseStudy";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";
import { getSortedCaseStudies } from "@/lib/portfolio";

const components = {
  contentComponents,
  CaseStudyProblemStatement,
  CaseStudyChapter,
  CaseStudyCallout,
  CaseStudyBlockquote,
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
      <main className="py-12 md:pb-0">
        <article>
          <div className="container">
            <Link className="textLink text-lg" href={`/portfolio`}>
              ← All Case Studies
            </Link>

            <div className="mt-16">
              <Tag content={postData.tag} />

              <h1 className="font-bold text-4xl my-4 md:text-5xl lg:text-6xl xl:text-7xl md:text-left max-w-lg lg:max-w-none leading-tight">
                {postData.title}
              </h1>
            </div>
            <hr className="max-w-lg lg:max-w-xl lg:mt-12 border-neutral-200 dark:border-neutral-800" />

            <div className="py-8 lg:py-16">
              <p className="text-lg leading-relaxed max-w-[65ch] text-neutral-700 dark:text-neutral-100 mb-8">
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
