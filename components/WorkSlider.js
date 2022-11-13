import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import Image from "next/image";

export default function WorkSlider() {
  function next() {
    Slider.slickNext();
  }
  function previous() {
    Slider.slickPrev();
  }

  var settings = {
    arrows: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={previous} />,
    nextArrow: <NextArrow onClick={next} />,
  };

  return (
    <Slider {...settings}>
      <div className="bg-workHlpr pt-12 pb-8">
        <Image
          className="mx-auto"
          src="/work-hlpr.png"
          alt="HLPR"
          width={900}
          height={621}
        />
      </div>
      <div className="bg-workGardening pt-12 pb-8">
        <Image
          className="mx-auto"
          src="/work-garden.png"
          alt="Gardening"
          width={900}
          height={621}
        />
      </div>
      <div className="bg-workMealplanner pt-12 pb-8">
        <Image
          className="mx-auto"
          src="/work-mealplanner.png"
          alt="Meal Planner"
          width={900}
          height={621}
        />
      </div>
      <div className="bg-workOther pt-12 pb-8"></div>
    </Slider>
  );
}
