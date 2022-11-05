import Footer from "@/components/Footer.js";
import Head from "next/head";
import Layout from "@/components/Layout";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pb-4 pt-12 md:pt-16 lg:pt-24 border-b border-neutral-200">
        <div className="container">
          <h1 className="font-bold leading-tight text-4xl mb-20 md:text-7xl">
            {homepage.name}
            <span className="hidden">|</span>
            <span className="block">{homepage.title}</span>
          </h1>
          <p className="text-2xl lg:text-4xl leading-relaxed mb-4">👋</p>
          <p className="text-lg lg:text-2xl leading-relaxed mb-6 lg:mb-12 text-neutral-500">
            <span className="text-neutral-800 font-bold">
              {homepage.greeting}
            </span>{" "}
            {homepage.intro}
          </p>
          <p
            className="text-lg lg:text-2xl leading-relaxed mb-6 lg:mb-12 font-semibold"
            dangerouslySetInnerHTML={{ __html: homepage.cta }}
          ></p>
        </div>
      </header>

      <main>
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
