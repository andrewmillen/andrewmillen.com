import Footer from "@/components/Footer";
import MoreWorkLayout from "@/components/portfolio/MoreWorkLayout";
import ImageWithCaption from "@/components/blog/ImageWithCaption";

export default function GraphicsWeb() {
  return (
    <MoreWorkLayout title="Graphic &amp; Web">
      <div className="border-b border-neutral-300 dark:border-neutral-800">
        <div className="container pb-12 xl:px-0 prose flex flex-col lg:flex-row space-x-8">
          <div className="lg:w-1/2 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/gw-tryptic.jpg"
              alt="Memphis themed poster series"
              width="600"
              height="450"
              caption="Memphis themed poster series"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-moneyball.jpg"
              alt="A poster for the movie Moneyball"
              width="600"
              height="450"
              caption="A poster for the movie Moneyball"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-casino.jpg"
              alt="Typeface specimen"
              width="600"
              height="450"
              caption="Casino Slab typeface (with <a class='textLink' href='https://andrewmillen.github.io/casino-type-specimen/' target='blank'>interactive specimen</a>)"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-horns.jpg"
              alt="Logo of two brass instruments interlocking"
              width="600"
              height="450"
              caption="Logomark for the Memphis Horns, for their <a href='https://memphismusichalloffame.com/inductee/memphishorns/' target='_blank' class='textLink'>Memphis Music Hall of Fame inductee page</a>"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-48 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/gw-mlk.jpg"
              alt="A website for the March Against Fear 50-year anniversary service"
              width="600"
              height="450"
              caption="A website for the <a class='textLink' href='https://andrewmillen.github.io/acalltocourage/' target='blank'>March Against Fear 50-year anniversary service</a>"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-gbb.jpg"
              alt="Logo for a Grizzlies podcast"
              width="600"
              height="450"
              caption="Logo for a Grizzlies podcast"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-kitchen.jpg"
              alt="Logo for a community kitchen"
              width="600"
              height="450"
              caption="Logo for a community kitchen"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-rhodes.jpg"
              alt="College crest"
              width="600"
              height="450"
              caption="Simplified crest for my alma mater"
            />
            <ImageWithCaption
              src="/portfolio-assets/gw-wine.jpg"
              alt="Website for the Wine Institute"
              width="600"
              height="450"
              caption="Website for the Wine Institute"
            />
          </div>
        </div>
      </div>
      <Footer />
    </MoreWorkLayout>
  );
}
