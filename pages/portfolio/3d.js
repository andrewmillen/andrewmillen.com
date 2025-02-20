import MoreWorkLayout from "@/components/portfolio/MoreWorkLayout";
import ImageWithCaption from "@/components/blog/ImageWithCaption";

export default function D3() {
  return (
    <MoreWorkLayout title="3D">
      <div className="border-b border-neutral-300 dark:border-neutral-800">
        <div className="container pb-12 xl:px-0 prose flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/2 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/3d-podracer.jpg"
              alt="Anakin's podracer"
              width="600"
              height="450"
              caption="Anakin's Podracer (lil version)"
            />
            <ImageWithCaption
              src="/portfolio-assets/3d-snes.jpg"
              alt="SNES controller"
              width="600"
              height="450"
              caption="SNES controller"
            />
            <ImageWithCaption
              src="/portfolio-assets/3d-kitchen.jpg"
              alt="Kitchen scene"
              width="600"
              height="450"
              caption="Kitchen scene"
            />
            <ImageWithCaption
              src="/portfolio-assets/3d-palm-aire.jpg"
              alt="A vintage motel sign"
              width="600"
              height="450"
              caption="Sign for the Palm Aire Motel"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-48 flex flex-col items-center">
            <ImageWithCaption
              src="/portfolio-assets/3d-nedry.jpg"
              alt="Nedry's desk from Jurassic Park"
              width="600"
              height="450"
              caption="Nedry's desk from Jurassic Park"
            />
            <ImageWithCaption
              src="/portfolio-assets/3d-guss.jpg"
              alt="Gus's fried chicken restaurant"
              width="600"
              height="450"
              caption="Gus' Fried Chicken (a Memphis landmark)"
            />
            <ImageWithCaption
              src="/portfolio-assets/3d-serenity.jpg"
              alt="A scene from Serenity, the ship from Firely"
              width="600"
              height="450"
              caption="A scene from Serenity, the ship from Firely"
            />
            <ImageWithCaption
              src="/portfolio-assets/3d-lookout.jpg"
              alt="A tall building on a cliffside"
              width="600"
              height="450"
              caption="'Lookout' (clay render)"
            />
          </div>
        </div>
      </div>
    </MoreWorkLayout>
  );
}
