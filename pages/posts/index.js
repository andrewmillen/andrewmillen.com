import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/PostDate";
import Link from "next/link";
import globalData from "@/content/globalData.json";
import Layout from "@/components/Layout";
import Head from "next/head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const meta = globalData.meta;
  return {
    props: {
      allPostsData,
      meta,
    },
    revalidate: 1,
  };
}

export default function Blog({ allPostsData, meta }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Andrew Millen</title>
        <meta name="description" content={meta.description} />
        <link rel="stylesheet" href="https://use.typekit.net/mqf8sev.css" />
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
