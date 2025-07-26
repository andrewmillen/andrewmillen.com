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
  const dotColors = [
    "text-violet-900", // hlpr
    "text-moss-900", // gardening
    "text-salmon-900", // meal planner
    "text-blue-900", // other
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

  // Handle dot click
  const scrollTo = (index) => {
    if (mainApi) {
      mainApi.scrollTo(index);
    }
  };

  // Get total number of slides (including the "other" slide)
  const totalSlides = slides.length + 1;

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
      <div className="relative mx-auto max-w-5xl lg:max-w-[88rem] px-2 sm:px-8">
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

        <div
          className={`${dotColors[currentIdx]} flex justify-center space-x-4 mt-4 mb-2 md:mb-4 lg:hidden`}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`size-4 rounded-full border-3 transition-all duration-200 ${
                index === currentIdx
                  ? `bg-current border-current opacity-50`
                  : "border-current opacity-50 hover:cursor-pointer"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden lg:flex w-full px-12 justify-between items-center absolute mt-0 inset-0 z-10">
          <SliderArrow emblaApi={mainApi} direction="Previous" />
          <SliderArrow emblaApi={mainApi} direction="Next" />
        </div>
      </div>
    </section>
  );
}
