import { getAllPostIds, getPostData } from "@/lib/portfolio";
import { useEffect, useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import Callout from "@/components/portfolio/Callout";
import DesignSystemDemo from "@/components/portfolio/DesignSystemDemo";
import Figure from "@/components/Figure";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import PortfolioPasswordGate from "@/components/PortfolioPasswordGate";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import RelatedCaseStudy from "@/components/portfolio/RelatedCaseStudy";
import Tag from "@/components/Tag";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";
import { getSortedCaseStudies } from "@/lib/portfolio";

const caseStudyComponents = {
  ProblemStatement,
  Callout,
  DesignSystemDemo,
  Link,
  Figure,
};

const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD;

export default function Post({ postData, caseStudies }) {
  const metaTitle = `${postData.title} | Andrew Millen | Portfolio`;

  // Authentication state - only used if postData.protected is true
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check authentication on mount if this is a protected case study
  useEffect(() => {
    if (postData.protected) {
      const storedPassword = localStorage.getItem("portfolioPassword");
      if (storedPassword === CORRECT_PASSWORD) {
        setIsAuthenticated(true);
      }
    } else {
      // If not protected, consider it authenticated
      setIsAuthenticated(true);
    }
  }, [postData.protected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem("portfolioPassword", password);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

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
      {postData.protected && !isAuthenticated ? (
        <PortfolioPasswordGate
          password={password}
          setPassword={setPassword}
          error={error}
          onSubmit={handleSubmit}
        />
      ) : (
        <>
          <main className="py-12 2xl:mb-32 lg:pt-20">
            <article>
              <div className="container">
                <Breadcrumb
                  parentPageUrl="/portfolio"
                  parentPageLabel="Portfolio"
                  activePageLabel="Case Study"
                />

                <div className="mt-12 md:mt-20 lg:mt-28">
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

                <div className="prose prose-neutral prose-lg dark:prose-invert max-w-none flex flex-col space-y-0 lg:space-y-12 xl:space-y-16 items-center pb-12">
                  <MDXRemote
                    {...postData.mdxSource}
                    components={caseStudyComponents}
                  />
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
        </>
      )}
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
