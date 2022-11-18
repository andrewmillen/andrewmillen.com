import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import globalData from "@/content/globalData.json";

export default function ErrorPage({ meta, errorPageContent }) {
  return (
    <Layout>
      <Head>
        <title>{errorPageContent.title}</title>
        <meta name="description" content={meta.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main className="pt-12 pb-4 text-center md:pt-16 lg:pt-24">
        <div className="container">
          <Breadcrumb url="/" />
          <h1 className="font-bold text-4xl mb-2 md:text-5xl">
            {errorPageContent.heading}
          </h1>
          <p className="text-lg mb-6 max-w-lg mx-auto lg:text-xl leading-relaxed lg:max-w-2xl lg:mb-12">
            {errorPageContent.content}
          </p>
          <Image
            src="/nedry.jpg"
            alt="Dennis Nedry lost in Jurassic Park."
            height={213}
            width={200}
            className="mt-8 mx-auto"
          />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const meta = globalData.meta;
  const errorPageContent = globalData.errorPage;

  return {
    props: {
      meta,
      errorPageContent,
    },
  };
}
