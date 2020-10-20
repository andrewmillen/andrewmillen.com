import Layout from "@/components/global/Layout";
import { getBlogPosts } from "@/lib/api";
import { linkResolver } from "@/lib/linkResolver";
import Head from "next/head";
import { default as NextLink } from "next/link";
import Moment from "moment";
import Footer from "@/components/global/Footer";
import { RichText } from "prismic-reactjs";

export default function BlogIndex({ posts }) {
  function formatDate(publicationDate) {
    const date = Date(publicationDate);
    const formattedDate = Moment(date).format("LL");
    return formattedDate;
  }

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
          <h1 className="font-bold text-4xl mb-2 md:text-5xl">Recent Posts</h1>
          {/* <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p> */}
        </div>
      </header>
      <main className="max-w-2xl mx-auto my-4 md:my-12 lg:my-24">
        <div className="container">
          {posts.map((post, index) => {
            return (
              <article key={index} className="max-w-2xl my-8 lg:my-16">
                {post.publication ? (
                  <span className="flex items-center">
                    <a
                      href={post.link}
                      className="inline font-karmina visited:text-purple-900"
                    >
                      <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
                        {RichText.asText(post.title)}
                      </h2>
                    </a>

                    <span className="text-lg inline md:text-2xl ml-3">↗</span>
                  </span>
                ) : (
                  <NextLink href={linkResolver(post)}>
                    <a className="inline-block font-karmina visited:text-purple-900">
                      <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
                        {RichText.asText(post.title)}
                      </h2>
                    </a>
                  </NextLink>
                )}
                <div className="block uppercase tracking-widest font-semibold text-gray-600 text-xs mt-2 mb-4">
                  {formatDate(post._meta.firstPublicationDate)}
                  {post.publication && (
                    <div className="bg-gray-200 inline rounded-sm py-1 px-2 ml-4 text-gray-800">
                      {post.publication}
                    </div>
                  )}
                </div>
                <p>{post.blurb}</p>
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
