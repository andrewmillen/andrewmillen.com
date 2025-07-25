import { useEffect, useState } from "react";

import CarouselArrow from "@/components/CarouselArrow";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturedWorkSlider({ slides }) {
  const slideBgColors = [
    "from-purple-200 to-violet-200", // hlpr
    "from-moss-200 to-moss-300", // gardening
    "from-red-200 to-red-200", // meal planner
    "from-sky-200 to-blue-200", // other
  ];
  const [slideBg, setSlideBg] = useState(slideBgColors[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setSlideBg(slideBgColors[selectedIndex]);
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, slideBgColors]);

  return (
    <section className={`py-8 lg:pt-8 bg-linear-to-tl ${slideBg}`}>
      <h2 className="sr-only">Featured Work</h2>
      <div className="relative mx-auto max-w-5xl lg:max-w-[88rem] lg:px-12">
        <div className="overflow-hidden lg:mx-28 relative z-20" ref={emblaRef}>
          <div className="flex items-center">
            {slides.map((slide) => (
              <div key={slide.key} className="min-w-0 flex-[0_0_100%]">
                <Image
                  className="mx-auto"
                  src={slide.src}
                  priority="true"
                  alt={slide.alt}
                  width={1350}
                  height={932}
                />
              </div>
            ))}
            <div key="other" className="min-w-0 flex-[0_0_100%]">
              <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                <p className="text-sky-600 dark:text-blue-300 mb-8">
                  Looking for something more in-depth?
                </p>{" "}
                <p>
                  <a
                    href="mailto:andrewmillen1+website@gmail.com"
                    target="_blank"
                    className="textLink text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400"
                  >
                    Email me
                  </a>{" "}
                  or{" "}
                  <Link
                    href="/portfolio"
                    className="textLink text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400"
                  >
                    visit my portfolio
                  </Link>{" "}
                  to learn more about my process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-4 px-12 flex space-x-2 justify-center lg:justify-between lg:items-center lg:absolute lg:mt-0 lg:inset-0 lg:z-10">
          <CarouselArrow emblaApi={emblaApi} direction="Previous" />
          <CarouselArrow emblaApi={emblaApi} direction="Next" />
        </div>
      </div>
    </section>
  );
}
