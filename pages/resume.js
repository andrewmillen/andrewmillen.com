import Head from "next/head";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import globalData from "@/content/globalData.json";
import resumeData from "@/content/resumeData.json";

export default function Resume({ meta, resume }) {
  return (
    <Layout>
      <Head>
        <title>{meta.title} | Resume</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>

      <a
        href="/andrew-millen-resume.pdf"
        rel="nofollow noreferrer"
        className="fixed left-0 right-0 bottom-0 lg:left-auto lg:right-6 lg:bottom-6 justify-center lg:rounded-md bg-blue-100 dark:bg-blue-900 py-4 px-4 flex space-x-4 group"
      >
        <span className="text-link-light-default dark:text-white underline underline-offset-4 group-hover:text-link-light-hover group-hover:dark:text-link-dark-hover mb-1">
          Download PDF
        </span>
      </a>

      <header className="pt-6 pb-12 md:py-12 xl:py-20">
        <div className="container max-w-3xl">
          <Breadcrumb url="/" />
          <h1 className="mt-8 font-bold text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl">
            {resume.header.name}
          </h1>
          <p className="font-bold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl">
            {resume.header.title}
          </p>
        </div>
      </header>
      <main className="pb-12 xl:pb-20">
        <div className="container max-w-3xl">
          <div className="mb-16">
            <h2 className="font-semibold tracking-widest uppercase mb-8">
              Experience
            </h2>
            {resume.experiences.map((experience, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-lg">
                  {experience.organization}
                </h3>
                <p>{experience.role}</p>
                <p>{experience.dates}</p>
                <p className="mt-4">{experience.description}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="font-semibold tracking-widest uppercase mb-8">
              Certifications
            </h2>
            {resume.certifications.map((certification, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold">
                  <a href={certification.providerUrl}>
                    {certification.provider}
                  </a>
                </h3>
                <p>{certification.certification}</p>
                <p>{certification.date}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="font-semibold tracking-widest uppercase mb-8">
              Community
            </h2>
            {resume.community.map((community, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold">{community.name}</h3>
                <p>{community.role}</p>
                <p>{community.date}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="font-semibold tracking-widest uppercase mb-8">
              Education
            </h2>
            <div className="mb-8">
              <h3 className="font-semibold">{resume.education.school}</h3>
              <p>{resume.education.location}</p>
              <p>{resume.education.major}</p>
              <p>{resume.education.honors}</p>
              <p>{resume.education.date}</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = globalData.meta;
  const resume = resumeData;

  return {
    props: {
      meta,
      resume,
    },
  };
}
