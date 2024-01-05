import Link from "next/link";
import Image from "next/image";

export default function PortfolioWorkLinks() {
  return (
    <section>
      <div className="flex">
        <Link
          href="/portfolio/ui-product"
          className="w-full md:w-1/3 bg-violet-900 flex place-items-center relative justify-center text-white text-center aspect-[4/3] group overflow-hidden"
        >
          <Image
            src="/portfolio-assets/ui-hlpr.jpg"
            fill="true"
            className="opacity-40 transition-all duration-300 group-hover:scale-110"
          ></Image>
          <div className="z-30">
            <h2 className="font-bold font-degular text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <span className="block font-normal font-degular text-lg lg:text-xl">
                See More
              </span>
              UI &amp; Product
            </h2>
          </div>
        </Link>
        <Link
          href="/portfolio/3d"
          className="w-full md:w-1/3 bg-yellow-800 flex place-items-center relative justify-center text-white text-center aspect-[4/3] group overflow-hidden"
        >
          <Image
            src="/portfolio-assets/3d-podracer.jpg"
            fill="true"
            className="opacity-40 transition-all duration-300 group-hover:scale-110"
          ></Image>
          <div className="z-30">
            <h2 className="font-bold font-degular text-2xl  lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <span className="block font-normal font-degular text-lg lg:text-xl">
                See More
              </span>
              3D
            </h2>
          </div>
        </Link>
        <Link
          href="/portfolio/graphic-web"
          className="w-full md:w-1/3 bg-blue-950 flex place-items-center relative justify-center text-white text-center aspect-[4/3] group overflow-hidden"
        >
          <Image
            src="/portfolio-assets/gw-gbb-cover.jpg"
            fill="true"
            className="opacity-20 transition-all duration-300 group-hover:scale-110"
          ></Image>
          <div className="z-30">
            <h2 className="font-bold font-degular text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <span className="block font-normal font-degular text-lg lg:text-xl">
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
