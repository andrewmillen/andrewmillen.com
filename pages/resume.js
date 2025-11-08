import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Head from "next/head";
import Layout from "@/components/Layout";
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

      <header className="py-12 xl:py-20">
        <div className="container max-w-3xl">
          <Breadcrumb />
          <h1 className="h1 mt-8">{resume.header.name}</h1>
        </div>
      </header>
      <main className="pb-12 xl:pb-20">
        <div className="container max-w-3xl">
          <div className="mb-16">
            <h2 className="h4 mb-4">About Me</h2>
            <p className="text-xl font-semibold">{resume.header.about}</p>
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
                {experience.description && (
                  <ul className="mt-4 list-disc ml-4">
                    {experience.description.map((content, index) => (
                      <li className="mb-1" key={index}>
                        {content}
                      </li>
                    ))}
                  </ul>
                )}
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

          <div className="xl:fixed xl:right-6 xl:bottom-6">
            <Button
              icon="download"
              label="Download as PDF"
              url="/andrew-millen-resume.pdf"
              background="bg-blue-100 hover:bg-blue-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            />
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
