import { useState, useEffect } from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import Image from "next/image";

export default function WorkSlider({ slides }) {
  // Set default slide index and background color
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideBg, setSlideBg] = useState("purple-100");

  // Update the slide background color by matching the index of the active slide to the index in the Slides array.
  useEffect(() => {
    setSlideBg(slides[activeSlideIndex].bgcolor);
  }, [activeSlideIndex, setActiveSlideIndex]);

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
    // This doesn't work without "current," not sure why.
    beforeChange: (current, next) => setActiveSlideIndex(next),
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-3xl font-bold max-w-sm md:max-w-md lg:max-w-xl">
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
