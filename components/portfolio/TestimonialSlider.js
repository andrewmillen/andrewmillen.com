import { useState, useEffect } from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import Image from "next/image";

export default function TestimonialSlider({ slides }) {
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
    <div className="sliderWrapper bg-yellow-200 dark:bg-yellow-300 text-neutral-900">
      <div className="container">
        <Slider {...settings} className="workSlider py-24 lg:py-32">
          {slides.map((slide) => (
            <div key={slide.key}>
              <blockquote className="text-center max-w-5xl lg:px-24">
                <span className="block font-degular font-bold text-2xl lg:text-3xl mb-4">
                  &ldquo;{slide.quote}&rdquo;
                </span>
                <cite className="block not-italic text-neutral-500 dark:text-neutral-600 text-xl lg:text-2xl font-semibold font-degular">
                  {slide.attribution}
                </cite>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
