import Layout from "@/components/global/Layout";
import Footer from "@/components/global/Footer";
import Head from "next/head";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { PrismicClient } from "@/lib/api.js";
import { linkResolver } from "@/lib/linkResolver";
import Moment from "moment";

export default function Post({ data }) {
  function formatDate(publicationDate) {
    const date = Date(publicationDate);
    const formattedDate = Moment(date).format("LL");
    return formattedDate;
  }
  return (
    <Layout>
      <Head>
        <title>{data.meta_title} | Andrew Millen Blog</title>
        <meta name="description" content={data.meta_description} />
        <meta property="og:title" content={data.meta_title} />
        <meta property="og:image" content={data.open_graph_image.url} />
        <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" />
      </Head>
      <main className="py-12 md:py-24">
        <div className="container">
          <article>
            <h1 className="font-bold text-3xl mb-2 md:text-4xl md:text-center max-w-lg lg:max-w-5xl mx-auto">
              {data.title}
            </h1>
            <date className="block uppercase tracking-widest font-semibold text-gray-600 text-xs mt-2 mb-4 mx-auto max-w-lg lg:max-w-5xl md:text-center">
              {formatDate(data.firstPublicationDate)}
            </date>
            {/* <p className="italic font-karmina md:text-center max-w-lg lg:max-w-5xl mx-auto text-lg lg:text-2xl mt-12 lg:mt-24">
              {data.blurb}
            </p> */}
            <hr className="max-w-md md:mx-auto mt-12" />
            <div className="prose prose-lg md:prose-xl lg:prose-2xl mt-12 lg:mt-24 xl:mt-32 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              <RichText render={data.content} linkResolver={linkResolver} />
            </div>
          </article>
          <aside className="text-center mt-4 md:mt-12 lg:mt-24">
            <img
              src="/andrew-millen.jpg"
              alt="Headshot of Andrew looking suave in a leather jacket"
              className="rounded-full w-24 h-24 mb-4 mx-auto"
            />
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Andrew Millen is a product designer specializing in user interface
              design, animation, and prototyping.{" "}
              <Link href="/">
                <a className="underline-thin font-semibold text-blue-600 leading-relaxed">
                  See some of his work
                </a>
              </Link>
              .
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await PrismicClient.getByUID("blog_post", uid);
  return {
    props: { data },
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
