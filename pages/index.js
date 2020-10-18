import Layout from "@/components/global/Layout";
import Head from "next/head";
import Project from "@/components/Project.js";
import Footer from "@/components/global/Footer.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Andrew Millen | Product Designer</title>
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

      <header className="pt-12 pb-4 text-center md:pt-16 lg:pt-24">
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
          imageSrc="/work-hlpr.png"
          imageSrc2x="/work-hlpr@2x.png"
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
          imageSrc="/work-hellohome.png"
          imageSrc2x="/work-hellohome@2x.png"
          imageAlt="Visit hellohome.com"
          buttonLink="http://hellohome.co/"
          buttonText="Visit"
        />
        <Project
          switchLayout={false}
          name="Meal Planner App Concept"
          tags={["UX", "UI", "Interaction Design"]}
          description="An app that would store recipes, track meals against calorie goals, and plan grocery trips—all in one."
          largeImage={false}
          imageLink="https://dribbble.com/andrewmillen/projects/1035886-Meal-Planner-App-Concept"
          imageSrc="/work-mealplanner.png"
          imageSrc2x="/work-mealplanner@2x.png"
          imageAlt="Meal Planner app home screen."
          buttonLink="https://dribbble.com/andrewmillen/projects/1035886-Meal-Planner-App-Concept"
          buttonText="More on Dribbble"
        />
        <Project
          switchLayout={true}
          name="Zignyl"
          tags={["Research", "UX", "UI"]}
          description="A robust store management app with scheduling, forecasting, reporting, and employee management."
          largeImage={true}
          imageLink="http://www.zignyl.com/"
          imageSrc="/work-zignyl.png"
          imageSrc2x="/work-zignyl@2x.png"
          imageAlt="Visit zignyl.com"
          buttonLink="http://www.zignyl.com/"
          buttonText="Visit"
        />
        <section className="py-12 lg:py-32">
          <div className="container text-center">
            <p className="text-lg lg:text-2xl">
              I also dabble in{" "}
              <a
                className="inline-block font-semibold underline-thin"
                href="https://www.behance.net/gallery/13309373/3D-Renderings"
              >
                3D
              </a>
              ,{" "}
              <a
                className="inline-block font-semibold underline-thin"
                href="https://www.andrewmillen.com/casino-type-specimen/"
              >
                type design
              </a>
              , and{" "}
              <a
                className="inline-block font-semibold underline-thin"
                href="https://codepen.io/andrewmillen/pen/QBObNG"
              >
                front-end development
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
