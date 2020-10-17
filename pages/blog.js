import Layout from "@/components/global/Layout";
import Head from "next/head";

export default function BlogIndex() {
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
    </Layout>
  );
}
