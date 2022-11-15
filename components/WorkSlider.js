import { useState, useEffect } from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import Image from "next/image";

const slides = [
  {
    key: "hlpr",
    src: "/work-hlpr.png",
    alt: "An app designed to help you give to asset-deprived people.",
    bgcolor: "bg-workHlpr",
  },
  {
    key: "gardening",
    src: "/work-garden.png",
    alt: "An augmented reality concept for planning your landscapes.",
    bgcolor: "bg-workGardening",
  },
  {
    key: "mealplanner",
    src: "/work-mealplanner.png",
    alt: "An app that recommends recipes based on weather patterns and other data.",
    bgcolor: "bg-workMealplanner",
  },
  {
    key: "other",
    src: "/work-other.png",
    alt: "",
    bgcolor: "bg-workOther",
  },
];

export default function WorkSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideBg, setSlideBg] = useState("work-Hlpr");

  useEffect(() => {
    const targetIndex = activeSlide;
    setSlideBg(slides[targetIndex].bgcolor);
  }, [activeSlide, setActiveSlide]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),
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
      className={`sliderWrapper border-b border-neutral-200 transition-colors transition-duration-1000 ${slideBg}`}
    >
      <div className="container">
        <Slider {...settings} className="workSlider pt-12 pb-24 lg:pb-8">
          {slides.map((slide) => (
            <div key={slide.key}>
              <Image
                className="mx-auto px-4 md:px-8 lg:px-32 2xl:px-0"
                src={slide.src}
                alt={slide.alt}
                width={1350}
                height={932}
              />
              {slide.key === "other" && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-3xl font-bold max-w-sm md:max-w-md max-w-xl">
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
