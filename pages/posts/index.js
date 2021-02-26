import Layout from "@/components/global/Layout";
import { getBlogPosts } from "@/lib/api";
import { linkResolver } from "@/lib/linkResolver";
import Head from "next/head";
import { default as NextLink } from "next/link";
import Footer from "@/components/global/Footer";
import { RichText } from "prismic-reactjs";
import PostDate from "@/components/PostDate";

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Andrew Millen</title>
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" />
      </Head>

      <header className="pt-12 md:pt-16 lg:pt-24 max-w-5xl mx-auto md:text-center">
        <div className="container">
          <NextLink href="/">
            <a>
              <svg viewBox="0 0 172 172" className="w-10 h-10 mb-8 mx-auto">
                <path
                  class="st0"
                  d="M86,0C38.5,0,0,38.5,0,86s38.5,86,86,86c47.5,0,86-38.5,86-86S133.5,0,86,0z M53.7,126L37.1,79l8.5-33l28.1,80
	H53.7z M89.7,126L61.6,46h20l16.5,47L89.7,126z M128.9,126h-18.6V46h18.6V126z"
                />
              </svg>
            </a>
          </NextLink>
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
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getBlogPosts();
  const posts = data.allBlog_posts.edges.map((edge) => edge.node);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
