import Layout from "@/components/global/Layout";
import { getBlogPosts } from "@/lib/api";
import { linkResolver, hrefResolver } from "@/lib/linkResolver";
import Head from "next/head";
import { default as NextLink } from "next/link";

export default function BlogIndex({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <header className="pt-12 pb-4 md:pt-16 lg:pt-24">
        <div className="container">
          <h1 className="font-semibold text-4xl mb-2 md:text-5xl">
            Andrew Millen Blog
          </h1>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>
      </header>
      <main>
        <div className="container">
          {posts.map((post, index) => {
            console.log(post);
            return (
              <article key={index} className="max-w-2xl my-8">
                <NextLink href={linkResolver(post)}>
                  <a>
                    <h2 className="text-lg md:text-2xl font-semibold">
                      {post.title}
                    </h2>
                  </a>
                </NextLink>
                <div className="uppercase tracking-widest font-semibold text-gray-700 text-xs my-2">
                  {post._meta.firstPublicationDate}
                </div>
                <p>{post.blurb}</p>
              </article>
            );
          })}
        </div>
      </main>
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
