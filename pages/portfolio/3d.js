import ImageWithCaption from "@/components/blog/ImageWithCaption";
import MoreWorkLayout from "@/components/portfolio/MoreWorkLayout";

export default function D3() {
  return (
    <MoreWorkLayout title="3D">
      <div className="flex flex-col items-center space-y-16">
        <ImageWithCaption
          src="/portfolio-assets/3d-lil-podracer.jpg"
          alt="Anakin's podracer"
          width="1280"
          height="720"
          caption="Anakin's Podracer (lil version)"
        />
        <ImageWithCaption
          src="/portfolio-assets/3d-kitchen-scene.jpg"
          alt="Kitchen scene"
          width="1280"
          height="823"
          caption="Kitchen scene"
        />
        <ImageWithCaption
          src="/portfolio-assets/3d-snes.jpg"
          alt="Super Nintendo controller"
          width="1280"
          height="720"
          caption="Super Nintendo controller"
        />
        <ImageWithCaption
          src="/portfolio-assets/3d-serenity.jpg"
          alt="A scene from Serenity, the ship from Firefly"
          width="1280"
          height="720"
          caption="A scene from Serenity, the ship from Firefly"
        />
        <ImageWithCaption
          src="/portfolio-assets/3d-nedry-desk.jpg"
          alt="Dennis Nedry's desk from Jurassic Park"
          width="1280"
          height="720"
          caption="Dennis Nedry's desk from Jurassic Park"
        />
        <ImageWithCaption
          src="/portfolio-assets/3d-gus.jpg"
          alt="Gus's World Famous Fried Chicken"
          width="1280"
          height="800"
          caption="Gus's World Famous Fried Chicken"
        />
        <ImageWithCaption
          src="/portfolio-assets/3d-lookout.jpg"
          alt="A tall building on a cliffside"
          width="600"
          height="750"
          caption="'Lookout' (clay render)"
        />
      </div>
    </MoreWorkLayout>
  );
}
