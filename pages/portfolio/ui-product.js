import ImageWithCaption from "@/components/blog/ImageWithCaption";
import MoreWorkLayout from "@/components/portfolio/MoreWorkLayout";
import Video from "@/components/blog/Video";

export default function UIProduct() {
  return (
    <MoreWorkLayout title="UI &amp; Product">
      <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-12 xl:space-x-24">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-12 xl:space-y-24">
          <ImageWithCaption
            src="/portfolio-assets/ui-costarica.jpg"
            alt="Travel app concept"
            width="600"
            height="450"
            caption="Travel app concept"
          />
          <ImageWithCaption
            src="/portfolio-assets/ui-rms.jpg"
            alt="Dashboard showing timers and reminders for a restaurant"
            width="600"
            height="450"
            caption="Employee dashboard for a restaurant management system"
          />
          <ImageWithCaption
            src="/portfolio-assets/ui-reverso-weather.jpg"
            alt="A weather app that returns locations that match given weather conditions."
            width="600"
            height="450"
            caption="A weather app that returns locations that match given weather conditions"
          />
          <Video
            src="/portfolio-assets/ui-thermostat"
            alt="Neumorphic thermostat UI concept"
            width="600"
            height="450"
            caption="Neumorphic thermostat UI concept"
            autoplay
            loop
          />
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-60 flex flex-col items-center lg:items-start space-y-12 xl:space-y-24">
          <ImageWithCaption
            src="/portfolio-assets/ui-hellohome.jpg"
            alt="Dashboard showing a home sale tracker"
            width="600"
            height="450"
            caption="Dashboard for a home selling startup"
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
    </MoreWorkLayout>
  );
}
