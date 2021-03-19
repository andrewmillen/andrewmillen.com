import Head from "next/head";
import Layout from "@/components/Layout";
import Project from "@/components/Project.js";
import Footer from "@/components/Footer.js";
import DividerLine from "@/components/DividerLine.js";
import globalData from "@/content/globalData.json";
import homepageData from "@/content/homepageData.json";
import projectsData from "@/content/projectsData.json";

export default function Home({ meta, homepage, projects, cta }) {
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

      <header className="text-center pb-4 pt-12 md:pt-16 lg:pt-24">
        <div className="container">
          <h1 className="font-semibold text-4xl mb-2 md:text-5xl">
            {homepage.title}
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed mb-6 lg:mb-12 max-w-lg lg:max-w-2xl mx-auto">
            {homepage.intro}
          </p>
          <DividerLine />
          <a href={`mailto:${cta.email}`} className="button z-10">
            {cta.text}
          </a>
        </div>
      </header>

      <main>
        <section className="py-8">
          <ul>
            {projects.map((project) => (
              <Project
                key={project.id}
                content={project.content}
                layout={project.layout}
              />
            ))}
          </ul>
        </section>

        <aside className="py-12 lg:py-32">
          <div className="container text-center">
            <p
              className="text-lg lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: homepage.aside }}
            ></p>
          </div>
        </aside>
      </main>
      <Footer cta={cta} />
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = globalData.meta;
  const homepage = homepageData.content;
  const projects = projectsData.projects;
  const cta = globalData.cta;

  return {
    props: {
      meta,
      homepage,
      projects,
      cta,
    },
  };
}
