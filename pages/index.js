import Footer from "@/components/Footer.js";
import Head from "next/head";
import Layout from "@/components/Layout";
import HomepageHeader from "@/components/HomepageHeader";
import WorkSlider from "@/components/WorkSlider";
import Project from "@/components/Project.js";
import globalData from "@/content/globalData.json";
import homepageData from "@/content/homepageData.json";
import projectsData from "@/content/projectsData.json";

export default function Home({ meta, homepage, projects }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>

      <HomepageHeader content={homepage} />

      <main>
        <WorkSlider />
        {projects.map((project) => (
          <Project
            key={project.id}
            content={project.content}
            layout={project.layout}
          />
        ))}
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = globalData.meta;
  const homepage = homepageData.content;
  const projects = projectsData.projects;

  return {
    props: {
      meta,
      homepage,
      projects,
    },
  };
}
