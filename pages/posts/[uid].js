import Image from "next/image";
import Layout from "@/components/global/Layout";
import { PrismicClient } from "@/lib/api.js";
import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText, Date } from "prismic-reactjs";
import Link from "next/link";
import Footer from "@/components/global/Footer";
import SliceContent from "@/components/SliceContent";
import PostDate from "@/components/PostDate";

export default function Post({ data }) {
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
            <Link href="/">
              <a>
                <svg viewBox="0 0 172 172" className="w-10 h-10 mb-8 mx-auto">
                  <path
                    class="st0"
                    d="M86,0C38.5,0,0,38.5,0,86s38.5,86,86,86c47.5,0,86-38.5,86-86S133.5,0,86,0z M53.7,126L37.1,79l8.5-33l28.1,80
	H53.7z M89.7,126L61.6,46h20l16.5,47L89.7,126z M128.9,126h-18.6V46h18.6V126z"
                  />
                </svg>
              </a>
            </Link>
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
            <Link href="/">
              <a className="underline text-blue-600 visited:text-purple-900 leading-relaxed">
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

export async function getServerSideProps({ params }) {
  const { uid } = params;
  const { data } = await PrismicClient.getByUID("blog_post", uid);
  return {
    props: { data },
  };
}

// export async function getStaticPaths() {
//   const { results } = await PrismicClient.query(
//     Prismic.Predicates.at("document.type", "blog_post")
//   );

//   const paths = results.map((post) => ({
//     params: {
//       uid: post.uid,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
