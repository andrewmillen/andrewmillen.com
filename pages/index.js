import Head from "next/head";
import Layout from "@/components/Layout";
import HomepageHeader from "@/components/HomepageHeader";
import WorkSlider from "@/components/WorkSlider";
import Project from "@/components/Project.js";
import Footer from "@/components/Footer.js";
import globalData from "@/content/globalData.json";
import homepageData from "@/content/homepageData.json";

export default function Home({ meta, intro, slides, projects }) {
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
        {projects.map((project) => (
          <Project key={project.id} content={project.content} />
        ))}
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = globalData.meta;
  const intro = homepageData.intro;
  const slides = homepageData.slides;
  const projects = homepageData.projects;

  return {
    props: {
      meta,
      intro,
      slides,
      projects,
    },
  };
}
