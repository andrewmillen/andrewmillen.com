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
  function next() {
    Slider.slickNext();
  }
  function previous() {
    Slider.slickPrev();
  }

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={previous} />,
    nextArrow: <NextArrow onClick={next} />,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: false,
          dots: true,
          arrow: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="workSlider">
      {slides.map((slide) => (
        <div key={slide.key} className={`${slide.bgcolor} pt-12 pb-12 lg:pb-8`}>
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
  );
}
