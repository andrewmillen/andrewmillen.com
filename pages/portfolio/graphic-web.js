import Figure from "@/components/Figure";
import MoreWorkHeader from "@/components/portfolio/MoreWorkHeader";

export default function GraphicsWeb() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 xl:gap-32 border-b border-neutral-200 dark:border-neutral-800 py-12 lg:py-20 px-6 sm:px-12 2xl:px-0">
      <MoreWorkHeader title="Graphic &amp; Web" />

      <main>
        <div className="flex flex-col gap-12 md:flex-row xl:gap-24">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-12 xl:gap-24">
            <Figure
              type="image"
              src="/portfolio-assets/gw-aiga.jpg"
              alt="A Memphis themed poster featuring the pyramid on the river"
              width={600}
              height={800}
              caption="Memphis-themed poster for an AIGA event"
            />
            <Figure
              type="image"
              src="/portfolio-assets/gw-rhodes.svg"
              alt="College crest"
              width={600}
              height={450}
              caption="Crest for my alma mater"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-12 xl:gap-24">
            <Figure
              type="image"
              src="/portfolio-assets/gw-gbb.jpg"
              alt="Art for an SBNation NBA podcast"
              width={600}
              height={450}
              caption="Art for an SBNation NBA podcast"
            />
            <Figure
              type="image"
              src="/portfolio-assets/gw-moneyball.jpg"
              alt="Alternative poster for the movie 'Moneyball'"
              width={600}
              height={800}
              caption="Alternative poster for the movie 'Moneyball'"
            />
          </div>
        </div>
        <div className="flex justify-center my-12 xl:my-24">
          <div className="relative">
            <svg
              width="32"
              height="60"
              fill="none"
              className="absolute right-4 top-0"
            >
              <path d="M0 60V0h32v60l-15.738-9.184L0 60Z" fill="#000000" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m18.475 23-.352.355-1.664 3.17-.522.353H10v4.84h3.264l.29.352L10 38.862v3.525h3.525l.352-.354 1.663-3.17.523-.353H22v-4.841h-3.264l-.29-.354L22 26.525V23h-3.525Z"
                fill="#65db9c"
              />
            </svg>
            <Figure
              type="image"
              src="/portfolio-assets/gw-ferrari.jpg"
              alt="An illustration of a Ferrari F430"
              width={1298}
              height={624}
              caption="500-layer photorealistic <a href='https://en.wikipedia.org/wiki/Vexel' target='blank'>vexel</a> illustration of a Ferrari F430"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-12 xl:space-x-24">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-12 xl:space-y-24">
            <Figure
              type="image"
              src="/portfolio-assets/gw-march.jpg"
              alt="A website for the March Against Fear 50-year anniversary service"
              width={600}
              height={800}
              caption="Microsite celebrating the <a href='https://andrewmillen.github.io/a-call-to-courage/' target='blank'>50th anniversary of the March Against Fear</a>"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-12 xl:space-y-24">
            <Figure
              type="image"
              src="/portfolio-assets/gw-kitchen-logo.svg"
              alt="Logo for a local community kitchen"
              width={600}
              height={450}
              caption="Logo for a local community kitchen"
            />
            <Figure
              type="image"
              src="/portfolio-assets/gw-casino.svg"
              alt="Typeface specimen"
              width={600}
              height={630}
              caption="Custom typeface inspired by playing card pips, including an <a href='https://andrewmillen.github.io/casino-type-specimen/' target='blank'>interactive specimen</a>"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
