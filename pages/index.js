import Head from "next/head";
import Project from "@/components/Project.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-12 pb-4 text-center md:pt-16">
        <div className="container">
          <h1 className="font-semibold text-4xl mb-2 md:text-5xl">
            Andrew Millen
          </h1>
          <p className="text-lg mb-6 max-w-lg mx-auto">
            Hi! I’m a user&nbsp;interface designer from Memphis,&nbsp;TN. I
            specialize in product&nbsp;design, animation, and
            interactive&nbsp;prototyping.
          </p>
          <hr className="absolute mt-6 left-0 w-screen transform translate-y-1" />

          <button
            className="z-10"
            onClick={() => (window.location = "mailto:andrewmillen1@gmail.com")}
          >
            Let's Chat
          </button>
        </div>
      </header>

      <main className="py-8">
        <Project
          switchLayout={false}
          name="HLPR."
          tags={["UX", "UI", "Prototyping"]}
          description="Proof of concept for an app designed to make giving to the
          asset-deprived easy and convenient."
          largeImage={false}
          imageLink="https://projects.invisionapp.com/prototype/HLPR-Demo-cjnuq2lp300j6xq01nfletzm9"
          imageUrl="/work-hlpr.png"
          imageUrl2x="/work-hlpr@2x.png"
          imageAlt="Helper app home screen."
          buttonLink="https://medium.com/@andrewmillen/designing-a-better-way-to-give-76ffeaf53f89"
          buttonText="Read the Case Study"
        />
        <Project
          switchLayout={true}
          name="HelloHome"
          tags={["UX", "UI"]}
          description="An end-to-end real estate selling experience. Sellers can track their progress from list to close, sign documents, and find home services."
          largeImage={true}
          imageLink="http://hellohome.co/"
          imageUrl="/work-hellohome.png"
          imageUrl2x="/work-hellohome@2x.png"
          imageAlt="Visit hellohome.com"
          buttonLink="http://hellohome.co/"
          buttonText="Visit"
        />
      </main>
    </>
  );
}
