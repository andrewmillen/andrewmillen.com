import Figure from "@/components/Figure";
import MoreWorkHeader from "@/components/portfolio/MoreWorkHeader";

export default function UIProduct() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 xl:gap-32 border-b border-neutral-200 dark:border-neutral-800 py-12 lg:py-20 px-6 sm:px-12 2xl:px-0">
      <MoreWorkHeader title="UI &amp; Product" />

      <main className="flex flex-col gap-12 lg:flex-row 2xl:gap-24">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-12 xl:gap-24">
          <Figure
            type="image"
            src="/portfolio-assets/ui-costarica.jpg"
            alt="Travel app concept"
            width={600}
            height={450}
            caption="Travel app concept"
          />
          <Figure
            type="image"
            src="/portfolio-assets/ui-rms.jpg"
            alt="Dashboard showing timers and reminders for a restaurant"
            width={600}
            height={450}
            caption="Employee dashboard for a restaurant management system"
          />
          <Figure
            type="image"
            src="/portfolio-assets/ui-reverso-weather.jpg"
            alt="A weather app that returns locations that match given weather conditions."
            width={600}
            height={450}
            caption="A weather app that returns locations that match given weather conditions"
          />
          <Figure
            type="video"
            src="/portfolio-assets/ui-thermostat.mp4"
            width={600}
            height={450}
            caption="Neumorphic thermostat UI concept"
            ambient
          />
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-24 xl:mt-48 flex flex-col items-center lg:items-start space-y-12 xl:space-y-24">
          <Figure
            type="image"
            src="/portfolio-assets/ui-hellohome.jpg"
            alt="Dashboard showing a home sale tracker"
            width={600}
            height={450}
            caption="Dashboard for a home selling startup"
          />
          <Figure
            type="image"
            src="/portfolio-assets/ui-today.jpg"
            alt="Daily organization app concept"
            width={600}
            height={450}
            caption="Daily organization app concept"
          />
          <Figure
            type="image"
            src="/portfolio-assets/ui-pokemon.jpg"
            alt="Pokémon trading platform app concept"
            width={600}
            height={450}
            caption="Pokémon trading platform app concept"
          />
        </div>
      </main>
    </div>
  );
}
