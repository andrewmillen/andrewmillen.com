import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import RssButton from "@/components/RssButton";
import Breadcrumb from "@/components/Breadcrumb";
import global from "@/content/global.json";
import { getSortedBlogPosts } from "@/lib/posts";
import getRSS from "@/lib/rss";

export default function Blog({ posts, meta }) {
  const latestPost = posts[0];

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
          <Breadcrumb url="/" />
          <h1 className="h1 mt-4">Blog</h1>
        </div>
      </header>

      <main className="pb-12 md:pb-20 lg:pb-24 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container">
          <div className="my-12 lg:my-24">
            <Image
              width="240"
              height="126"
              src={latestPost.frontMatter.thumbnailUrl}
              alt=""
              className="mb-4 md:mb-8"
              priority
            />
            <div>
              <h2 className="h4 mb-2">Latest Post</h2>
              <Link
                className="inline-block h2 mb-3 hover:underline hover:underline-offset-4"
                href={"/posts/" + latestPost.slug}
                passHref
              >
                {latestPost.frontMatter.title}
              </Link>
              <p className="max-w-2xl">{latestPost.frontMatter.description}</p>
            </div>
          </div>

          <h2 className="h4 mb-4 lg:mb-6">Previous Posts</h2>
          <ul className="max-w-4xl">
            {posts.slice(1).map((post, index) => (
              <li key={index} className="my-2 lg:my-4">
                <Link
                  className="inline-block font-semibold hover:underline hover:underline-offset-2 lg:text-lg"
                  href={"/posts/" + post.slug}
                  passHref
                >
                  {post.frontMatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  await getRSS();
  const posts = getSortedBlogPosts();
  const meta = global.meta;

  return {
    props: {
      posts,
      meta,
    },
    revalidate: 1,
  };
};
