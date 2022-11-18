import { useState, useEffect } from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import Image from "next/image";

export default function WorkSlider({ slides }) {
  // Set default slide background color for first slide
  const [slideBg, setSlideBg] = useState("purple-100");

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
    // Removing "current" breaks this entirely, not sure why
    // The function works (the HTML updates) but the background color doesn't show, or shows randomly.
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
      className={`sliderWrapper border-b border-neutral-200 transition-colors transition-duration-1000 bg-${slideBg}`}
    >
      <div className="container">
        <Slider
          {...settings}
          className="workSlider pt-12 pb-24 lg:pb-8 px-4 md:px-8 lg:px-16 2xl:px-0"
        >
          {slides.map((slide) => (
            <div key={slide.key}>
              <Image
                className="mx-auto"
                src={slide.src}
                alt={slide.alt}
                width={1350}
                height={932}
              />
              {slide.key === "other" && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md sm:text-2xl lg:text-3xl font-bold max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-8 sm:px-0">
                  <span className="text-[#0086D1]">
                    Looking for something more in-depth?
                  </span>{" "}
                  UX work doesn’t always make good eye candy.{" "}
                  <a
                    href="mailto:andrewmillen1+website@gmail.com"
                    target="_blank"
                    className="underline underline-offset-4 hover:text-gray-600"
                  >
                    Email me
                  </a>{" "}
                  to learn more about my process.
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
