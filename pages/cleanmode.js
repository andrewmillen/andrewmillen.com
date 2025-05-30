import Button from "@/components/Button";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function CleanMode() {
  return (
    <Layout>
      <Head>
        <title>CleanMode | Menu Bar App for Cleaning Your Mac</title>
        <meta
          name="description"
          content="CleanMode is a tiny utility app that locks the keyboard and dims
              the screen so you can safely clean your Mac."
        />
        <meta property="og:image" content="/og-image-cleanmode.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
      </Head>

      <main className="p-4 xl:p-6 w-screen h-screen">
        <div className="w-full h-full flex flex-col items-center justify-center bg-[url('/cleanmode-bg.jpg')] bg-cover bg-center relative">
          <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-md">
            <div className="absolute left-[50vw] sm:left-[60vw] md:left-[65vw] lg:left-[75vw] top-2 h-8 w-12 rounded-md bg-white/20 hidden sm:flex items-center justify-center">
              <Image src="/cleanmode-glyph.svg" alt="" width={28} height={20} />
            </div>
          </div>

          <div className="absolute left-[50vw] sm:left-[60vw] md:left-[65vw] lg:left-[75vw] top-[50px] rounded-lg bg-white/40 dark:bg-black/70 backdrop-blur-md hidden sm:flex flex-col w-52 p-3 space-y-2 outline outline-1 outline-black/15 dark:outline-black dark:border dark:border-white/20 shadow-lg text-sm text-neutral-700 dark:text-neutral-300">
            <div>Lock Keyboard</div>
            <div>Dim Screen</div>
            <hr className="border-neutral-700/20 dark:border-neutral-300/20" />
            <div className="flex justify-between">
              <span>Quit CleanMode</span>
              <span className="text-neutral-500 dark:text-neutral-400">
                ⌘&nbsp;Q
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center max-w-lg mb-24 text-center text-white px-8">
            <Image
              src="/cleanmode.png"
              alt="CleanMode"
              width={144}
              height={144}
              className="mb-4"
            />
            <h1 className="h1 mb-3">CleanMode</h1>
            <p>
              CleanMode is a tiny utility app that locks the keyboard and dims
              the screen so you can safely clean your Mac.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-lg text-center">
            <Button
              icon="download"
              label="Download Free on GitHub"
              url="https://github.com/andrewmillen/CleanMode/releases/latest"
              background="bg-blue-100 hover:bg-blue-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            />
            <p className="mt-2 text-xs text-neutral-100">
              Requires macOS 11.0 or later
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
