import Head from "next/head";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import global from "@/content/global.json";
import resume from "@/content/resume.json";

export default function Resume({ meta, resume }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Resume</title>
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
          <h1 className="mt-8 h1">{resume.header.name}</h1>
          <p className="degular font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2">
            {resume.header.title}
          </p>
        </div>
      </header>
      <main className="pb-12 xl:pb-20">
        <div className="container max-w-3xl">
          <div className="mb-16">
            <h2 className="h4 mb-4">About Me</h2>
            <p>{resume.header.statement}</p>
          </div>
          <div className="mb-16">
            <h2 className="h4 mb-4">Experience</h2>
            {resume.experiences.map((experience, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-lg">
                  {experience.organization}
                </h3>
                <p>{experience.role}</p>
                <p>{experience.dates}</p>
                <ul className="mt-4 list-disc ml-4">
                  {experience.description.map((content, index) => (
                    <li className="mb-1" key={index}>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="h4 mb-4">Certifications</h2>
            {resume.certifications.map((certification, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-lg">
                  {certification.provider}
                </h3>
                <p>{certification.certification}</p>
                <p>{certification.date}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="h4 mb-4">Publications</h2>
            {resume.publications.map((publication, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-lg">
                  {publication.publisher}
                </h3>
                <p>
                  <a
                    href={publication.link}
                    target="_blank"
                    className="underline"
                  >
                    {publication.title}
                  </a>
                </p>
                <p>{publication.date}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="h4 mb-4">Community</h2>
            {resume.community.map((community, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-lg">{community.name}</h3>
                <p>{community.role}</p>
                <p>{community.date}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h2 className="h4 mb-4">Education</h2>
            <div className="mb-8">
              <h3 className="font-semibold text-lg">
                {resume.education.school}
              </h3>
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
  const meta = global.meta;

  return {
    props: {
      meta,
      resume,
    },
  };
}
