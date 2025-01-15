import Head from "next/head";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyTeaser from "@/components/portfolio/CaseStudyTeaser";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";
import MoreWorkLinks from "@/components/portfolio/MoreWorkLinks";
import PortfolioLinks from "@/components/portfolio/PortfolioLinks";
import Footer from "@/components/Footer.js";
import globalData from "@/content/globalData.json";
import { getSortedCaseStudies } from "@/lib/portfolio";

export default function Portfolio({ caseStudies, meta }) {
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

      <header className="py-12 lg:py-20 border-b border-neutral-300 dark:border-neutral-800 text-center">
        <div className="container">
          <div className="inline-flex flex-col space-y-4 items-center mb-4">
            <Breadcrumb url="/" />
            <h1 className="mt-2 lg:mt-0 h1">Andrew Millen Portfolio</h1>
          </div>

          <p className="dark:text-neutral-300 text-xl">
            Design leader with 10 years of expertise in UI/UX and design systems
          </p>
        </div>
      </header>

      <main>
        <section>
          <div className="container space-y-24 xl:space-y-32 py-12 lg:py-24 xl:py-32">
            {caseStudies.map((caseStudy, index) =>
              caseStudy.frontMatter.unlisted == false ? (
                <CaseStudyTeaser
                  key={index}
                  thumbnail={caseStudy.frontMatter.thumbnail}
                  tag={caseStudy.frontMatter.tag}
                  title={caseStudy.frontMatter.title}
                  summary={caseStudy.frontMatter.summary}
                  slug={caseStudy.slug}
                />
              ) : null
            )}
          </div>
        </section>

        <TestimonialSlider />

        <MoreWorkLinks />

        <PortfolioLinks />

        <Footer />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const caseStudies = getSortedCaseStudies();
  const meta = globalData.meta;

  return {
    props: {
      caseStudies,
      meta,
    },
    revalidate: 1,
  };
};
