import { NextArrow, PrevArrow } from "@/components/Arrows";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";

export default function FeaturedWorkSlider({ slides }) {
  const slideBgColors = [
    "bg-purple-100 dark:bg-purple-900", // hlpr
    "bg-moss-100 dark:bg-moss-900", // gardening
    "bg-red-100 dark:bg-red-500", // meal planner
    "bg-sky-100 dark:bg-blue-900", // other
  ];

  // Set default slide background color for first slide
  const [slideBg, setSlideBg] = useState(slideBgColors[0]);

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
    // Update slideBg by matching the index ("next") of the incoming slide to the object in the Slides array
    beforeChange: (current, next) => setSlideBg(slideBgColors[next]),
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
      {" "}
      <div className="container">
        <Slider
          {...settings}
          className="workSlider pt-12 pb-16 lg:pb-8 md:px-8 lg:px-16 2xl:px-0"
        >
          {slides.map((slide) => (
            <div key={slide.key}>
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
          <div key="other">
            <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-md md:max-w-xl lg:max-w-2xl">
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
        </Slider>
      </div>
    </div>
  );
}
