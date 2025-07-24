import ImageWithCaption from "@/components/blog/ImageWithCaption";
import MoreWorkLayout from "@/components/portfolio/MoreWorkLayout";
import Video from "@/components/blog/Video";

export default function UIProduct() {
  return (
    <MoreWorkLayout title="UI &amp; Product">
      <div className="lg:w-1/2 flex flex-col items-center">
        <ImageWithCaption
          src="/portfolio-assets/ui-costarica.jpg"
          alt="Travel app concept"
          width="600"
          height="450"
          caption="Travel app concept"
        />
        <ImageWithCaption
          src="/portfolio-assets/ui-zignyl.jpg"
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
        <ImageWithCaption
          src="/portfolio-assets/ui-gardening.jpg"
          alt="AR Gardening app concept"
          width="600"
          height="450"
          caption="AR Gardening app concept"
        />
      </div>
      <div className="lg:w-1/2 mt-16 lg:mt-80 flex flex-col items-center">
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
    </MoreWorkLayout>
  );
}
