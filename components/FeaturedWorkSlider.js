import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import SliderArrow from "@/components/SliderArrow";
import useEmblaCarousel from "embla-carousel-react";

export default function FeaturedWorkSlider({ slides }) {
  const slideBgColors = [
    "bg-purple-100", // hlpr
    "bg-[#d5e2d0]", // gardening
    "bg-[#fad2ce]", // meal planner
    "bg-sky-100", // other
  ];
  const dotColors = [
    "text-purple-900", // hlpr
    "text-[#2e3d2a]", // gardening
    "text-[#782c24]", // meal planner
    "text-sky-900", // other
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIdx, setCurrentIdx] = useState(0);

  // Update current index when slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      setCurrentIdx(idx);
    };

    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Handle dot click
  const scrollTo = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  // Get total number of slides (including the "other" slide)
  const totalSlides = slides.length + 1;

  return (
    <section
      className={`py-8 sm:py-12 xl:py-16 2xl:py-20 relative transition-colors duration-300 ${slideBgColors[currentIdx]} dark:bg-neutral-800`}
    >
      <h2 className="sr-only">Featured Work</h2>
      <div className="relative mx-auto max-w-4xl lg:max-w-7xl md:px-24 lg:px-32">
        <div className="overflow-hidden relative z-20" ref={emblaRef}>
          <div className="flex items-center">
            {slides.map((slide) => (
              <div
                key={slide.key}
                className="min-w-0 flex-[0_0_100%] px-6 sm:px-12 md:px-0 md:mx-8 lg:mx-16"
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
                <p className="h2 text-sky-800 dark:text-white mb-8 font-display">
                  Looking for something more in-depth?
                </p>{" "}
                <p className="text-xl text-neutral-700 dark:text-neutral-300">
                  <a
                    href="mailto:andrewmillen1+website@gmail.com"
                    target="_blank"
                    className="textLink font-semibold text-neutral-700 hover:text-neutral-500 dark:text-link-dark-default dark:hover:text-link-dark-hover"
                  >
                    Email me
                  </a>{" "}
                  or{" "}
                  <Link
                    href="/portfolio"
                    className="textLink font-semibold text-neutral-700 hover:text-neutral-500 dark:text-link-dark-default dark:hover:text-link-dark-hover"
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
          className={`${dotColors[currentIdx]} dark:text-white flex justify-center space-x-4 mt-8 sm:mt-12 md:hidden`}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`size-3 rounded-full bg-current border-2 transition-all duration-200 ${
                index !== currentIdx && "opacity-30 hover:cursor-pointer"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden md:flex w-full px-3 lg:px-5 2xl:px-0 justify-between items-center absolute mt-0 inset-0 z-10">
          <SliderArrow emblaApi={emblaApi} direction="Previous" />
          <SliderArrow emblaApi={emblaApi} direction="Next" />
        </div>
      </div>
    </section>
  );
}
