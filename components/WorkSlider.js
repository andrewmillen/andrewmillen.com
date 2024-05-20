import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import Image from "next/image";

export default function WorkSlider({ slides }) {
  // Set default slide background color for first slide
  const [slideBg, setSlideBg] = useState(slides[0].bgcolor);

  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    arrows: true,
    // Update slideBg by matching the index ("next") of the incoming slide to the object in the Slides array in homepageData.json
    beforeChange: (current, next) => setSlideBg(slides[next].bgcolor),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrow: false,
        },
      },
    ],
  };

  return (
    <div
      className={`sliderWrapper border-b border-neutral-200 dark:border-neutral-800 transition-colors transition-duration-1000 ${slideBg} dark:bg-opacity-80`}
    >
      <div className="container">
        <Slider
          {...settings}
          className="workSlider pt-12 pb-16 lg:pb-8 md:px-8 lg:px-16 2xl:px-0"
        >
          {slides.map((slide) => (
            <div key={slide.key}>
              {slide.key === "other" ? (
                <div className="text-xl sm:text-2xl md:text-3xl font-bold max-w-md md:max-w-2xl">
                  <p className="text-[#0086D1] dark:text-blue-300 mb-4">
                    Looking for something more in-depth?
                  </p>{" "}
                  <p>
                    UX work doesn’t always make good eye candy.{" "}
                    <a
                      href="mailto:andrewmillen1+website@gmail.com"
                      target="_blank"
                      className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
                    >
                      Email me
                    </a>{" "}
                    or{" "}
                    <Link
                      href="/portfolio"
                      className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
                    >
                      visit my portfolio
                    </Link>{" "}
                    to learn more about my process.
                  </p>
                </div>
              ) : (
                <Image
                  className="mx-auto"
                  src={slide.src}
                  priority="true"
                  alt={slide.alt}
                  width={1350}
                  height={932}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
