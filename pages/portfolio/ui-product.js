import Footer from "@/components/Footer";
import PortfolioWorkLayout from "@/components/PortfolioWorkLayout";
import ImageWithCaption from "@/components/blog/ImageWithCaption";
import Video from "@/components/blog/Video";

export default function UIProduct() {
  return (
    <PortfolioWorkLayout title="UI &amp; Product">
      <div className="border-b border-neutral-300 dark:border-neutral-800">
        <div className="container pb-12 xl:px-0 prose flex flex-col lg:flex-row space-x-8">
          <div className="lg:w-1/2 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/ui-costarica.jpg"
              alt="Travel app concept"
              width="600"
              height="450"
              caption="Travel app concept"
            />
            <ImageWithCaption
              src="/portfolio-assets/ui-gardening.jpg"
              alt="AR Gardening app concept"
              width="600"
              height="450"
              caption="AR Gardening app concept"
            />
            <Video
              src="/portfolio-assets/ui-neumorphic"
              alt="Neumorphic thermostat UI"
              width="600"
              height="450"
              caption="Neumorphic thermostat UI"
              autoplay
              loop
            />
          </div>
          <div className="lg:w-1/2 lg:mt-48 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/ui-hlpr.jpg"
              alt="HLPR app concept"
              width="600"
              height="450"
              caption="HLPR app concept"
            />
            <ImageWithCaption
              src="/portfolio-assets/ui-today.jpg"
              alt="Daily organization app concept"
              width="600"
              height="450"
              caption="Daily organization app concept"
            />
            <ImageWithCaption
              src="/portfolio-assets/ui-pokemon.jpg"
              alt="Pokémon trading platform app concept"
              width="600"
              height="450"
              caption="Pokémon trading platform app concept"
            />
          </div>
        </div>
      </div>
      <Footer />
    </PortfolioWorkLayout>
  );
}
