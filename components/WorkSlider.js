import { useState, useRef, useEffect } from "react";
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
];

export default function WorkSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideBg, setSlideBg] = useState("work-Hlpr");

  // https://github.com/akiran/react-slick/issues/136
  // https://react-slick.neostack.com/docs/example/slide-change-hooks

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
      className={`sliderWrapper transition-colors transition-duration-1000 ${slideBg}`}
    >
      <div className="container">
        <Slider {...settings} className="workSlider">
          {slides.map((slide) => (
            <div key={slide.key}>
              <Image
                className="mx-auto px-4 md:px-8 lg:px-32 2xl:px-0"
                src={slide.src}
                alt={slide.alt}
                width={1350}
                height={932}
              />
            </div>
          ))}
          {/* <div className="bg-workOther pt-12 pb-8"></div> */}
        </Slider>
      </div>
    </div>
  );
}
