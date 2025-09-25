import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyTeaser from "@/components/portfolio/CaseStudyTeaser";
import Head from "next/head";
import Layout from "@/components/Layout";
import MoreWorkLinks from "@/components/portfolio/MoreWorkLinks";
import PortfolioLinks from "@/components/portfolio/PortfolioLinks";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";
import { getSortedCaseStudies } from "@/lib/portfolio";
import global from "@/content/global.json";
import portfolio from "@/content/portfolio.json";

export default function Portfolio({ caseStudies, meta, header, links }) {
  const thumbnailBgColors = [
    "bg-[#E0F1F8]", // design systems
    "bg-purple-100", // prototyping
    "bg-[#d5e2d0]", // innovation
  ];

  return (
    <Layout>
      <Head>
        <title>Portfolio | Andrew Millen | Senior Product Designer</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>

      <header className="py-12 lg:py-20 border-b border-neutral-200 dark:border-neutral-800 md:text-center">
        <div className="container">
          <div className="inline-flex flex-col space-y-4 md:items-center mb-4">
            <Breadcrumb />
            <h1 className="h1">{header.title}</h1>
          </div>

          <p className="text-neutral-600 dark:text-neutral-300 text-xl">
            {header.statement}
          </p>
        </div>
      </header>

      <main>
        <section>
          {caseStudies.map((caseStudy, index) =>
            caseStudy.frontMatter.unlisted == false ? (
              <div
                className="not-last:border-b not-last:border-neutral-200 not-last:dark:border-neutral-800"
                key={index}
              >
                <CaseStudyTeaser
                  thumbnail={caseStudy.frontMatter.thumbnail}
                  tag={caseStudy.frontMatter.tag}
                  title={caseStudy.frontMatter.title}
                  summary={caseStudy.frontMatter.summary}
                  slug={caseStudy.slug}
                  thumbnailBgColor={thumbnailBgColors[index]}
                />
              </div>
            ) : null
          )}
        </section>

        <TestimonialSlider />

        <MoreWorkLinks />

        <PortfolioLinks groups={links} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const caseStudies = getSortedCaseStudies();
  const meta = global.meta;
  const header = portfolio.header;
  const links = portfolio.links;

  return {
    props: {
      caseStudies,
      meta,
      header,
      links,
    },
    revalidate: 1,
  };
};
