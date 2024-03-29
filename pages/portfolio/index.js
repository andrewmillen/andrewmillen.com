import Head from "next/head";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyTeaser from "@/components/portfolio/CaseStudyTeaser";
import TestimonialSlider from "@/components/portfolio/TestimonialSlider";
import globalData from "@/content/globalData.json";
import Footer from "@/components/Footer.js";
import { getSortedPostsData } from "@/lib/portfolio";
import AdditionalWorkLinks from "@/components/portfolio/AdditionalWorkLinks";
import PortfolioLinks from "@/components/portfolio/PortfolioLinks";

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  const meta = globalData.meta;

  return {
    props: {
      posts,
      meta,
    },
    revalidate: 1,
  };
};

export default function Portfolio({ posts, meta }) {
  const testimonialContent = [
    {
      quote:
        "Andrew is a uniquely comprehensive designer, and I can't think of anyone more complete in their approach.",
      attribution:
        "Travis Graway • Director of Product Design, OfficeSpace Software",
    },
    {
      quote:
        "From the beginning, Andrew impressed me with his attention to detail and mastery of software. But his real gift showed through over time: he can learn anything he wants to learn.",
      attribution: "J.D. Graffam • Owner, Simple Focus",
    },
    {
      quote: "Working with Andrew stinks like a butt convention.",
      attribution: "Jen Pittman • Cherished Colleague",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Portfolio | Andrew Millen | Sr. Product Designer</title>
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
            Hybrid UI/UX designer and front-end developer specializing in design
            systems
          </p>
        </div>
      </header>

      <main>
        <section>
          <div className="container py-12">
            {posts.map((caseStudy, index) => (
              <CaseStudyTeaser
                key={index}
                tag={caseStudy.frontMatter.tag}
                title={caseStudy.frontMatter.title}
                summary={caseStudy.frontMatter.summary}
                outcomes={caseStudy.frontMatter.outcomes}
                slug={caseStudy.slug}
              />
            ))}
          </div>
        </section>

        <AdditionalWorkLinks />

        <TestimonialSlider slides={testimonialContent} />

        <PortfolioLinks />

        <Footer />
      </main>
    </Layout>
  );
}
