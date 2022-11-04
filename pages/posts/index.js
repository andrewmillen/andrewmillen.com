import Layout from "@/components/Layout";
import Head from "next/head";
import PostDate from "@/components/PostDate";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import globalData from "@/content/globalData.json";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const meta = globalData.meta;
  const footer = globalData.footer;
  return {
    props: {
      allPostsData,
      meta,
      footer,
    },
    revalidate: 1,
  };
}

export default function Blog({ allPostsData, meta, footer }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Blog</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" /> */}
      </Head>

      <header className="pt-12 md:pt-16 lg:pt-24">
        <div className="container">
          <Link className="textLink" href={`/`}>
            « Home
          </Link>
          <h1 className="font-bold text-4xl mt-4 mb-2 md:text-5xl">
            Recent Posts
          </h1>
        </div>
      </header>

      <main className="mx-auto py-4 md:py-8 lg:py-12 border-b border-neutral-200">
        <div className="container">
          <ul>
            {allPostsData.map(({ id, date, title, blurb }) => (
              <li key={id} className="my-8 lg:my-16">
                <div className="block uppercase tracking-widest font-semibold text-gray-600 text-xs ">
                  <PostDate dateString={date} />
                </div>
                <Link className="inline-block" href={`/posts/${id}`}>
                  <h2 className="text-2xl lg:text-3xl font-semibold leading-tight my-1 underline-offset-1 hover:underline hover:underline-offset-4">
                    {title}
                  </h2>
                </Link>
                <p className="mt-1 text-neutral-500">{blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer text={footer.text} />
    </Layout>
  );
}
