import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Head from "next/head";
import Layout from "@/components/Layout";
import { default as NextLink } from "next/link";
import PostDate from "@/components/PostDate";
import { RichText } from "prismic-reactjs";
import { getBlogPosts } from "@/lib/api";
import globalData from "@/content/globalData.json";
import { linkResolver } from "@/lib/linkResolver";

export default function BlogIndex({ posts, meta, footer }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Andrew Millen</title>
        <meta name="description" content={meta.description} />
        <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" />
      </Head>

      <header className="pt-12 md:pt-16 lg:pt-24 max-w-5xl mx-auto md:text-center">
        <div className="container">
          <Breadcrumb url="/" />
          <h1 className="font-bold font-karmina text-4xl mb-2 md:text-5xl">
            Recent Posts
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto my-4 md:my-12 lg:my-24">
        <div className="container">
          {posts.map((post, index) => {
            return (
              <article key={index} className="max-w-2xl my-8 lg:my-16">
                <div className="block uppercase tracking-widest font-semibold text-gray-600 text-xs ">
                  <PostDate date={post.publish_date} />
                </div>
                {post.publication ? (
                  <>
                    <a
                      href={post.link}
                      className="flex items-center visited:text-purple-900"
                    >
                      <h2 className="text-2xl lg:text-3xl font-semibold leading-tight my-1">
                        {RichText.asText(post.title)}
                      </h2>
                      <span className="text-lg inline md:text-2xl ml-2">↗</span>
                    </a>

                    <div className="flex items-center mb-4">
                      <img
                        className="w-5 h-5 mr-2"
                        src={post.publication_logo.url}
                        alt=""
                      />
                      <span className="font-semibold">{post.publication}</span>
                    </div>
                  </>
                ) : (
                  <NextLink href={linkResolver(post)}>
                    <a className="inline-block visited:text-gray-600">
                      <h2 className="text-2xl lg:text-3xl font-semibold leading-tight my-1">
                        {RichText.asText(post.title)}
                      </h2>
                    </a>
                  </NextLink>
                )}
                <p className="mt-1">{post.blurb}</p>
              </article>
            );
          })}
        </div>
      </main>
      <Footer text={footer.text} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getBlogPosts();

  const posts = data.allBlog_posts.edges.map((edge) => edge.node);
  const meta = globalData.meta;
  const footer = globalData.footer;

  return {
    props: {
      posts,
      meta,
      footer,
    },
    revalidate: 1,
  };
}
