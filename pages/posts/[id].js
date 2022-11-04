import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import PostDate from "@/components/PostDate";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Footer from "@/components/Footer";
import Link from "next/link";
import globalData from "@/content/globalData.json";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  const meta = globalData.meta;
  const footer = globalData.footer;

  return {
    props: {
      postData,
      meta,
      footer,
    },
  };
}

export default function Post({ postData, meta, footer }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Blog</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" /> */}
      </Head>

      <main className="py-12 md:py-24 border-b border-neutral-300">
        <article>
          <div className="container">
            <div className="text-center">
              <Link className="textLink" href={`/posts/`}>
                « Blog
              </Link>
              <h1 className="font-bold text-3xl my-4 md:text-4xl lg:text-5xl md:text-center max-w-lg lg:max-w-5xl leading-tight">
                {postData.title}
              </h1>
              <div className="block uppercase tracking-widest font-semibold text-gray-600 text-xs mt-2 mb-4 max-w-lg lg:max-w-5xl md:text-center">
                <PostDate dateString={postData.date} />
              </div>
            </div>
            {/* <p className="italic md:text-center max-w-lg lg:max-w-5xl mx-auto text-lg lg:text-2xl mt-12 lg:mt-24">
              {data.blurb}
            </p> */}
            <hr className="max-w-lg lg:max-w-xl mx-auto mt-12" />
            <div
              className="prose prose-lg md:prose-xl mx-auto pt-12"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>
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
            <Link href="/" className="textLink">
              See some of his work
            </Link>
            .
          </p>
        </aside>
      </main>

      <Footer text={footer.text} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
