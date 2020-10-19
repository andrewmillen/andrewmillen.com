import Layout from "@/components/global/Layout";
import { getBlogPosts } from "@/lib/api";
import { linkResolver } from "@/lib/linkResolver";
import Head from "next/head";
import { default as NextLink } from "next/link";
import Moment from "moment";
import Footer from "@/components/global/Footer";

export default function BlogIndex({ posts }) {
  function formatDate(publicationDate) {
    const date = Date(publicationDate);
    const formattedDate = Moment(date).format("LL");
    return formattedDate;
  }

  return (
    <Layout>
      <header className="pt-12 md:pt-16 lg:pt-24 max-w-5xl mx-auto md:text-center">
        <div className="container">
          <h1 className="font-bold text-4xl mb-2 md:text-5xl">
            Andrew Millen Blog
          </h1>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>
      </header>
      <main className="max-w-2xl mx-auto my-4 md:my-12 lg:my-24">
        <div className="container">
          {posts.map((post, index) => {
            return (
              <article key={index} className="max-w-2xl my-8">
                <NextLink href={linkResolver(post)}>
                  <a className="inline-block underline-thin text-blue-600">
                    <h2 className="text-lg md:text-2xl font-semibold">
                      {post.title}
                    </h2>
                  </a>
                </NextLink>
                <date className="block uppercase tracking-widest font-semibold text-gray-600 text-xs mt-2 mb-4">
                  {formatDate(post._meta.firstPublicationDate)}
                </date>
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
