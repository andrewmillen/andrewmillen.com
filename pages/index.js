import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-12 pb-4 text-center">
        <div className="container">
          <h1 className="font-semibold text-3xl mb-2">Andrew Millen</h1>
          <h3 className="text-lg mb-6 max-w-lg mx-auto">
            Hi! I’m a user&nbsp;interface designer from Memphis,&nbsp;TN. I
            specialize in product&nbsp;design, animation, and
            interactive&nbsp;prototyping.
          </h3>
          <hr className="absolute mt-6 left-0 w-screen" />

          <button className="z-10" href="mailto:andrewmillen1@gmail.com">
            Let's Chat
          </button>
        </div>
      </header>
    </>
  );
}
