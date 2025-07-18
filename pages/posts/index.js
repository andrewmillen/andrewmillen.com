import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import getRSS from "@/lib/rss";
import { getSortedBlogPosts } from "@/lib/posts";
import global from "@/content/global.json";

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

      <header className="pt-12 md:pt-16 lg:pt-24">
        <div className="container">
          <Breadcrumb url="/" />
          <h1 className="h1 mt-4">Blog</h1>
        </div>
      </header>

      <main className="pb-12 md:pb-20 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container">
          <div className="my-12 lg:my-24 lg:flex lg:gap-8 lg:items-center">
            <Image
              width="450"
              height="236"
              // Some posts might have animated GIF thumbnails, to be used here on the index only.
              src={
                latestPost.frontMatter.animatedThumbnailUrl ||
                latestPost.frontMatter.thumbnailUrl
              }
              alt=""
              className="mb-4 md:mb-8 lg:mb-0"
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
          <ul className="max-w-4xl mb-20">
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

          <Button
            icon="rss"
            label="Subscribe via RSS"
            url="https://andrewmillen.com/feed.xml"
            background="bg-orange-50 hover:bg-orange-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          />
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
