import Footer from "@/components/Footer.js";
import Head from "next/head";
import Layout from "@/components/Layout";
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

      <header className="py-4 md:py-8 lg:py-12 xl:py-20 border-b border-neutral-200">
        <div className="container">
          <h1 className="font-bold leading-none text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl">
            {homepage.name}
          </h1>
          <p className="inline-block font-bold text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl leading-none">
            {homepage.title}
          </p>
          <div className="text-3xl lg:text-5xl leading-relaxed mb-4 mt-20 lg:mt-30 xl:mt-40">
            👋
          </div>
          <p className="text-xl lg:text-2xl leading-relaxed lg:leading-relaxed mb-6 lg:mb-12 text-neutral-500">
            <span className="text-neutral-800 font-semibold">
              {homepage.greeting}
            </span>{" "}
            {homepage.intro}
          </p>
          <p
            className="text-xl lg:text-2xl leading-relaxed lg:leading-relaxed mb-6 lg:mb-12 font-semibold"
            dangerouslySetInnerHTML={{ __html: homepage.cta }}
          ></p>
        </div>
      </header>

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
