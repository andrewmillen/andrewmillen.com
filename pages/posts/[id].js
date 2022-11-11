import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import PostDate from "@/components/PostDate";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Footer from "@/components/Footer";
import Link from "next/link";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Blog</title>
        <meta name="description" content={postData.description} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.ogimage} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" /> */}
      </Head>

      <main className="py-12 md:py-24 border-b border-neutral-300">
        <article>
          <div className="container">
            <div className="text-left">
              <Link className="textLink text-lg" href={`/posts/`}>
                « All Posts
              </Link>
              <h1 className="font-bold text-3xl my-4 md:text-4xl lg:text-5xl xl:text-6xl md:text-left max-w-lg lg:max-w-5xl leading-tight">
                {postData.title}
              </h1>
              <div className="block uppercase tracking-widest font-semibold text-gray-600 text-sm mt-2 mb-4 max-w-lg lg:max-w-5xl md:text-left">
                Published <PostDate dateString={postData.date} />
              </div>
            </div>
            <hr className="max-w-lg lg:max-w-xl mt-12" />
          </div>
          <div className="container">
            <div
              className="prose prose-lg md:prose-xl pt-12"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>
        </article>
        <aside className="text-left mt-16 md:mt-24 lg:mt-32 container">
          <Image
            src="/andrew-millen.jpg"
            width={75}
            height={75}
            alt="Andrew looking suave in a leather jacket"
            className="rounded-full mb-4"
          />
          <p className="text-xl text-gray-700 max-w-2xl">
            Andrew Millen is a hybrid UI/UX designer with a background in
            copywriting and front-end development.{" "}
            <Link href="/" className="textLink">
              See some of his work
            </Link>
            .
          </p>
        </aside>
      </main>

      <Footer />
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
