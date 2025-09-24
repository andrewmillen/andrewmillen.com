import Figure from "@/components/Figure";
import MoreWorkHeader from "@/components/portfolio/MoreWorkHeader";

export default function D3() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 xl:gap-32 border-b border-neutral-200 dark:border-neutral-800 py-12 lg:py-20 px-6 sm:px-12 2xl:px-0">
      <MoreWorkHeader title="3D" />
      <main className="flex flex-col items-center gap-16 px-12 2xl:px-0">
        <Figure
          type="image"
          src="/portfolio-assets/3d-lil-podracer.jpg"
          alt="Anakin's podracer"
          width={1280}
          height={720}
          caption="Anakin's Podracer (lil version)"
        />
        <Figure
          type="image"
          src="/portfolio-assets/3d-kitchen-scene.jpg"
          alt="Kitchen scene"
          width={1280}
          height={823}
          caption="Kitchen scene"
        />
        <Figure
          type="image"
          src="/portfolio-assets/3d-snes.jpg"
          alt="Super Nintendo controller"
          width={1280}
          height={720}
          caption="Super Nintendo controller"
        />
        <Figure
          type="image"
          src="/portfolio-assets/3d-serenity.jpg"
          alt="A scene from Serenity, the ship from Firefly"
          width={1280}
          height={720}
          caption="A scene from Serenity, the ship from Firefly"
        />
        <Figure
          type="image"
          src="/portfolio-assets/3d-nedry-desk.jpg"
          alt="Dennis Nedry's desk from Jurassic Park"
          width={1280}
          height={720}
          caption="Dennis Nedry's desk from Jurassic Park"
        />
        <Figure
          type="image"
          src="/portfolio-assets/3d-gus.jpg"
          alt="Gus's World Famous Fried Chicken"
          width={1280}
          height={800}
          caption="Gus's World Famous Fried Chicken"
        />
        <Figure
          type="image"
          src="/portfolio-assets/3d-lookout.jpg"
          alt="A tall building on a cliffside"
          width={600}
          height={750}
          caption="'Lookout' (clay render)"
        />
      </main>
    </div>
  );
}
