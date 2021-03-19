import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Page Not Found</title>
        <meta
          name="description"
          content="Hi! I’m a user interface designer from Memphis, TN. I specialize in product design, animation, and interactive prototyping."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-12 pb-4 text-center md:pt-16 lg:pt-24">
        <div className="container">
          <Breadcrumb url="/" />
          <h1 className="font-semibold font-karmina text-4xl mb-2 md:text-5xl">
            404: Page Not Found
          </h1>
          <p className="text-lg mb-6 max-w-lg mx-auto lg:text-xl leading-relaxed lg:max-w-2xl lg:mb-12">
            The page you're looking for doesn't exist. Try going back to the{" "}
            <Link href="/">
              <a class="underline">homepage</a>
            </Link>
            .
          </p>
          <Image
            src="/nedry.jpg"
            alt="Dennis Nedry lost in Jurassic Park."
            height={213}
            width={200}
            className="mt-8"
          />
        </div>
      </main>
    </Layout>
  );
}
