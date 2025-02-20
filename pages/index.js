import Head from "next/head";
import Layout from "@/components/Layout";
import Introduction from "@/components/Introduction";
import FeaturedWorkSlider from "@/components/FeaturedWorkSlider";
import FeaturedLink from "@/components/FeaturedLink.js";
import Footer from "@/components/Footer.js";
import global from "@/content/global.json";
import homepage from "@/content/homepage.json";
import featuredLinks from "@/content/featuredLinks.json";

export default function Home({
  meta,
  introduction,
  featuredWork,
  featuredLinks,
}) {
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

      <Introduction content={introduction} />

      <main>
        <FeaturedWorkSlider slides={featuredWork} />

        <section>
          <h2 className="sr-only">Featured Links</h2>
          <ul>
            {featuredLinks.map((link, index) => (
              <FeaturedLink key={index} content={link.content} />
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = global.meta;
  const introduction = homepage.introduction;
  const featuredWork = homepage.featuredWork;

  return {
    props: {
      meta,
      introduction,
      featuredWork,
      featuredLinks,
    },
  };
}
