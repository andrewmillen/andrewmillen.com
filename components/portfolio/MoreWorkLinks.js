import Image from "next/image";
import Link from "next/link";

export default function MoreWorkLinks() {
  return (
    <section>
      <h2 className="sr-only">Additional Work</h2>
      <div className="flex flex-col sm:flex-row">
        <Link
          href="/portfolio/ui-product"
          className="w-full sm:w-1/3 bg-neutral-900 flex place-items-center relative justify-center text-white text-center aspect-4/3 group overflow-hidden"
        >
          <Image
            src="/portfolio-assets/ui-reverso-weather.jpg"
            fill="true"
            className="opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:opacity-40"
            alt=""
          ></Image>
          <div className="z-30">
            <h2 className="font-bold font-display text-4xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight">
              <span className="block font-normal font-display text-lg lg:text-xl">
                See More
              </span>
              UI &amp; Product
            </h2>
          </div>
        </Link>
        <Link
          href="/portfolio/3d"
          className="w-full sm:w-1/3 bg-neutral-900 flex place-items-center relative justify-center text-white text-center aspect-4/3 group overflow-hidden"
        >
          <Image
            src="/portfolio-assets/3d-podracer.jpg"
            fill="true"
            className="opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:opacity-40"
            alt=""
          ></Image>
          <div className="z-30">
            <h2 className="font-bold font-display text-4xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight">
              <span className="block font-normal font-display text-lg lg:text-xl">
                See More
              </span>
              3D
            </h2>
          </div>
        </Link>
        <Link
          href="/portfolio/graphic-web"
          className="w-full sm:w-1/3 bg-neutral-900 flex place-items-center relative justify-center text-white text-center aspect-4/3 group overflow-hidden"
        >
          <Image
            src="/portfolio-assets/gw-thumbnail.jpg"
            fill="true"
            className="opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:opacity-40"
            alt=""
          ></Image>
          <div className="z-30">
            <h2 className="font-bold font-display text-4xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight">
              <span className="block font-normal font-display text-lg lg:text-xl">
                See More
              </span>
              Graphic & Web
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
}
