import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import PostDate from "@/components/PostDate";
import Prismic from "prismic-javascript";
import { PrismicClient } from "@/lib/api.js";
import { RichText } from "prismic-reactjs";
import SliceContent from "@/components/SliceContent";
import globalData from "@/content/globalData.json";

export default function Post({ data, cta }) {
  return (
    <Layout>
      <Head>
        <title>{data.meta_title} | Andrew Millen Blog</title>
        <meta name="description" content={data.meta_description} />

        <meta property="og:title" content={data.meta_title} />
        <meta property="og:description" content={data.meta_description} />
        <meta property="og:image" content={data.open_graph_image.url} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" />
      </Head>
      <main className="py-12 md:py-24">
        <article>
          <div className="container">
            <Breadcrumb url="/" />
            <h1 className="font-bold font-karmina text-3xl mb-2 md:text-4xl lg:text-5xl md:text-center max-w-lg lg:max-w-5xl mx-auto leading-tight">
              {RichText.asText(data.title)}
            </h1>
            <div className="block uppercase tracking-widest font-semibold text-gray-600 text-xs mt-2 mb-4 mx-auto max-w-lg lg:max-w-5xl md:text-center">
              <PostDate date={data.publish_date} />
            </div>
            {/* <p className="italic font-karmina md:text-center max-w-lg lg:max-w-5xl mx-auto text-lg lg:text-2xl mt-12 lg:mt-24">
              {data.blurb}
            </p> */}
            <hr className="max-w-lg lg:max-w-xl mx-auto mt-12" />
          </div>
          <SliceContent data={data} />
        </article>
        <aside className="text-center mt-16 md:mt-24 lg:mt-32 container">
          <Image
            src="/andrew-millen.jpg"
            width={100}
            height={100}
            alt="Andrew looking suave in a leather jacket"
            className="rounded-full mb-4 mx-auto"
          />
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Andrew Millen is a product designer specializing in user interface
            design, animation, and prototyping.{" "}
            <Link
              href="/"
              className="underline text-blue-600 visited:text-purple-900 leading-relaxed">
              
                See some of his work
              
            </Link>
            .
          </p>
        </aside>
      </main>
      <Footer cta={cta} />
    </Layout>
  );
}

// export async function getServerSideProps({ params }) {
//   const { uid } = params;
//   const { data } = (await PrismicClient.getByUID("blog_post", uid)) || {};

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data },
//   };
// }

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await PrismicClient.getByUID("blog_post", uid);
  const cta = globalData.cta;

  return {
    props: { data, cta },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { results } = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "blog_post")
  );

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
