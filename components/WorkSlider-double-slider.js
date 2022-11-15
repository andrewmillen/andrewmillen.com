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
  function previous() {
    // Slider.slickPrev();
    console.log("previous");
  }
  function next() {
    // Slider.slickNext();
    console.log("next");
  }

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const currentSlide = useRef(null);

  // function changeBgColor(slide) {
  //   // to do
  // }

  // https://github.com/akiran/react-slick/issues/136
  // https://react-slick.neostack.com/docs/example/slide-change-hooks

  // useEffect(() => {
  //   console.log(currentSlide);
  // }, [currentSlide]);

  // const mainSlider = useRef(null);
  // const bgSlider = useRef(null);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={previous} />,
    nextArrow: <NextArrow onClick={next} />,
    dots: false,
    arrows: true,
    // beforeChange: (currentSlide) => setCurrentSlide(currentSlide),
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

  const bgSliderSettings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  return (
    <div className="sliderWrapper bg-white relative">
      <Slider
        {...bgSliderSettings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        className="bgSlider"
      >
        {slides.map((slide) => (
          <div key={slide.key}>
            <div className={`${slide.bgcolor} absolute w-full h-full`}>
              fdas
            </div>
          </div>
        ))}
      </Slider>
      <div className="container">
        <Slider
          {...settings}
          className="workSlider"
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
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
