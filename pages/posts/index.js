import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";
import Footer from "@/components/Footer";
import RssButton from "@/components/RssButton";
import globalData from "@/content/globalData.json";
import { getSortedPostsData } from "@/lib/posts";
import getRSS from "@/lib/rss";

export const getStaticProps = async () => {
  await getRSS();
  const posts = getSortedPostsData();
  const meta = globalData.meta;

  return {
    props: {
      posts,
      meta,
    },
    revalidate: 1,
  };
};

export default function Blog({ posts, meta }) {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Blog</title>
        <meta name="description" content={meta.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>

      <RssButton />

      <header className="pt-12 md:pt-16 lg:pt-24">
        <div className="container">
          <Link className="textLink text-lg" href={`/`}>
            ← Home
          </Link>
          <h1 className="h1 mt-4">All Posts</h1>
        </div>
      </header>

      <main className="pb-4 md:pb-8 lg:pb-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container">
          <ul className="max-w-4xl">
            {posts.map((post, index) => (
              <li key={index} className="my-8 lg:my-16">
                <Link
                  className="inline-block"
                  href={"/posts/" + post.slug}
                  passHref
                >
                  <h2 className="h3 font-semibold my-1 lg:my-4 underline-offset-1 hover:underline hover:underline-offset-4">
                    {post.frontMatter.title}
                  </h2>
                </Link>
                <p className="mt-1 text-neutral-500 text-md 2xl:text-lg">
                  {post.frontMatter.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
