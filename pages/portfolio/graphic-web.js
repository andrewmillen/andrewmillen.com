import MoreWorkLayout from "@/components/portfolio/MoreWorkLayout";
import ImageWithCaption from "@/components/blog/ImageWithCaption";

export default function GraphicsWeb() {
  return (
    <MoreWorkLayout title="Graphic &amp; Web">
      <div className="border-b border-neutral-300 dark:border-neutral-800">
        <div className="container pb-12 xl:px-0 prose flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/2 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/gw-aiga.jpg"
              alt="A Memphis themed poster featuring the pyramid on the river"
              width="600"
              height="450"
              caption="Memphis-themed poster for an AIGA event"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-kitchen.jpg"
              alt="Logo for a community kitchen"
              width="600"
              height="450"
              caption="Logo for a community kitchen"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-moneyball.jpg"
              alt="Alternative poster for the movie 'Moneyball'"
              width="600"
              height="450"
              caption="Alternative poster for the movie 'Moneyball'"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-casino.jpg"
              alt="Typeface specimen"
              width="600"
              height="450"
              caption="A custom typeface created for a work contest, including an <a class='textLink' href='https://andrewmillen.github.io/casino-type-specimen/' target='blank'>interactive specimen</a>"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-48 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/gw-gbb.jpg"
              alt="Art for an SBNation NBA podcast"
              width="600"
              height="450"
              caption="Art for an SBNation NBA podcast"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-mlk.jpg"
              alt="A website for the March Against Fear 50-year anniversary service"
              width="600"
              height="450"
              caption="A website I designed and coded for the <a class='textLink' href='https://andrewmillen.github.io/acalltocourage/' target='blank'>March Against Fear 50-year anniversary service</a>"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-rhodes.jpg"
              alt="College crest"
              width="600"
              height="450"
              caption="Crest for my alma mater"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-wine.jpg"
              alt="Website for the Wine Institute of California"
              width="600"
              height="450"
              caption="Website for the Wine Institute of California"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-vexel.jpg"
              alt="An illustration of a Ford Mustang"
              width="600"
              height="450"
              caption="A <a class='textLink' href='https://en.wikipedia.org/wiki/Vexel' target='blank'>vexel</a> illustration of a Ford Mustang"
            />
          </div>
        </div>
      </div>
    </MoreWorkLayout>
  );
}
