import Layout from "@/components/global/Layout";
import { PrismicClient } from "@/lib/api.js";
import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "@/lib/linkResolver";
import Moment from "moment";
import Link from "next/link";
import Footer from "@/components/global/Footer";
import SliceContent from "@/components/SliceContent";

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
        <article>
          <div className="container">
            <h1 className="font-bold text-3xl mb-2 md:text-4xl md:text-center max-w-lg lg:max-w-5xl mx-auto">
              {data.title}
            </h1>
            <div className="block uppercase tracking-widest font-semibold text-gray-600 text-xs mt-2 mb-4 mx-auto max-w-lg lg:max-w-5xl md:text-center">
              {formatDate(data.firstPublicationDate)}
            </div>
            {/* <p className="italic font-karmina md:text-center max-w-lg lg:max-w-5xl mx-auto text-lg lg:text-2xl mt-12 lg:mt-24">
              {data.blurb}
            </p> */}
            <hr className="max-w-lg lg:max-w-xl mx-auto mt-12" />
          </div>
          <SliceContent data={data} />
        </article>
        <aside className="text-center mt-4 md:mt-12 lg:mt-24 container">
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
      </main>
      <Footer />
    </Layout>
  );
}

// const PrismicDOM = require('prismic-dom');

// const content = document.body.map((slice) => {
//   // Render the right markup for a given slice type
//   switch (slice.type) {
//     // Text Slice
//     case "text":
//       return PrismicDOM.RichText.asHtml(slice.primary.rich_text);

//     // Image Gallery Slice
//     case "image-gallery":
//       return slice.fields.map((image) => {
//         return image.gallery_image.url;
//       });
//   }
// });

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
