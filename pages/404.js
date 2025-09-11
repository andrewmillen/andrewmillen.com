import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import global from "@/content/global.json";

export default function ErrorPage({ meta }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | 404</title>
        <meta name="description" content={meta.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main className="pt-12 pb-4 text-center md:pt-16 lg:pt-24">
        <div className="container">
          <Breadcrumb />
          <h1 className="h1 mt-4 mb-2 lg:mb-8">404: Page Not Found</h1>
          <p className="text-lg mb-6 max-w-lg mx-auto lg:text-xl leading-relaxed lg:max-w-2xl lg:mb-12">
            The page you're looking for doesn't exist.{" "}
            <Link href="/" className="textLink">
              Return home.
            </Link>
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
  const meta = global.meta;

  return {
    props: {
      meta,
    },
  };
}
