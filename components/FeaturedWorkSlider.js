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
    "from-sky-200 to-sky-100", // other
  ];
  const dotColors = [
    "text-violet-900", // hlpr
    "text-moss-900", // gardening
    "text-salmon-900", // meal planner
    "text-sky-700", // other
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
    <section className="py-8 md:pb-4 lg:pt-12 lg:pb-4 relative">
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
      <div className="relative mx-auto max-w-4xl lg:max-w-7xl md:px-8">
        <div
          className="overflow-hidden md:mx-20 lg:mx-28 relative z-20"
          ref={mainRef}
        >
          <div className="flex items-center">
            {slides.map((slide) => (
              <div
                key={slide.key}
                className="min-w-0 flex-[0_0_100%] px-3 sm:px-7 md:px-0"
              >
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
            <div key="other" className="min-w-0 flex-[0_0_100%] px-12">
              <div className="text-center mx-auto">
                <p className="h2 text-sky-800 mb-8 font-display">
                  Looking for something more in-depth?
                </p>{" "}
                <p className="text-xl text-neutral-700">
                  <a
                    href="mailto:andrewmillen1+website@gmail.com"
                    target="_blank"
                    className="textLink font-semibold text-neutral-700 hover:text-neutral-500"
                  >
                    Email me
                  </a>{" "}
                  or{" "}
                  <Link
                    href="/portfolio"
                    className="textLink font-semibold text-neutral-700 hover:text-neutral-500"
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
          className={`${dotColors[currentIdx]} flex justify-center space-x-4 mt-4 mb-2 md:mb-4 md:hidden`}
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

        <div className="hidden md:flex w-full px-6 justify-between items-center absolute mt-0 inset-0 z-10">
          <SliderArrow emblaApi={mainApi} direction="Previous" />
          <SliderArrow emblaApi={mainApi} direction="Next" />
        </div>
      </div>
    </section>
  );
}
