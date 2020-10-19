import Layout from "@/components/global/Layout";
import { PrismicClient } from "@/lib/api.js";
import Prismic from "prismic-javascript";

export default function Post({ data }) {
  return (
    <Layout>
      <article>
        <header>{data.title}</header>
        <main>{data.blurb}</main>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await PrismicClient.getByUID("blog_post", uid);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { results } = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "blog_post")
  );

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
