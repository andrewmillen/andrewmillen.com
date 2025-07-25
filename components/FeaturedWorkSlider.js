import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import SliderArrow from "@/components/SliderArrow";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturedWorkSlider({ slides }) {
  const slideBgColors = [
    "from-violet-200 to-pink-100", // hlpr
    "from-moss-200 to-amber-50", // gardening
    "from-salmon-300 to-salmon-100", // meal planner
    "from-blue-200 to-sky-100", // other
  ];
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
  const [bgRef, bgApi] = useEmblaCarousel({ loop: true });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const prevIdxRef = useRef(0);

  // Sync main and background carousels
  useEffect(() => {
    if (!mainApi || !bgApi) return;

    const onSelect = () => {
      const idx = mainApi.selectedScrollSnap();
      prevIdxRef.current = currentIdx;
      setCurrentIdx(idx);
      setFading(true);
      bgApi.scrollTo(idx);
      setFading(false);
    };

    onSelect();
    mainApi.on("select", onSelect);
    return () => mainApi.off("select", onSelect);
  }, [mainApi, bgApi, currentIdx]);

  return (
    <section className="py-8 lg:pt-16 relative">
      {/* Background carousel with crossfade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="w-full h-full relative" ref={bgRef}>
          <div className="flex w-full h-full">
            {slideBgColors.map((bg, idx) => (
              <div
                key={bg}
                className={`min-w-0 flex-[0_0_100%] absolute inset-0 transition-opacity duration-300 ${bg} bg-gradient-to-br`}
                style={{
                  opacity:
                    idx === currentIdx
                      ? fading
                        ? 0
                        : 1
                      : idx === prevIdxRef.current && fading
                      ? 1
                      : 0,
                  zIndex: idx === currentIdx ? 2 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <h2 className="sr-only">Featured Work</h2>
      <div className="relative mx-auto max-w-5xl lg:max-w-[88rem] lg:px-12">
        <div className="overflow-hidden lg:mx-28 relative z-20" ref={mainRef}>
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
          <SliderArrow emblaApi={mainApi} direction="Previous" />
          <SliderArrow emblaApi={mainApi} direction="Next" />
        </div>
      </div>
    </section>
  );
}
