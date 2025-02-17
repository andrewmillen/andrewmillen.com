import Head from "next/head";
import Layout from "@/components/Layout";
import HomepageHeader from "@/components/HomepageHeader";
import WorkSlider from "@/components/WorkSlider";
import FeaturedLink from "@/components/FeaturedLink.js";
import Footer from "@/components/Footer.js";
import global from "@/content/global.json";
import homepage from "@/content/homepage.json";
import featuredLinks from "@/content/featuredLinks.json";

export default function Home({ meta, intro, slides, links }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>

      <HomepageHeader content={intro} />

      <main>
        <WorkSlider slides={slides} />
        {links.map((link) => (
          <FeaturedLink key={link.id} content={link.content} />
        ))}
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = global.meta;
  const intro = homepage.intro;
  const slides = homepage.slides;
  const links = featuredLinks;

  return {
    props: {
      meta,
      intro,
      slides,
      links,
    },
  };
}
