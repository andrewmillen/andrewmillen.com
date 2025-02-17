import Slider from "react-slick";
import { PrevArrow, NextArrow } from "@/components/Arrows";
import testimonials from "@/content/testimonials.json";

export default function TestimonialSlider() {
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
    <section>
      <h2 className="sr-only">Testimonials</h2>
      <div className="sliderWrapper bg-yellow-200 dark:bg-yellow-300 text-neutral-900">
        <div className="container">
          <Slider
            {...settings}
            className="testimonialSlider py-24 lg:py-36 xl:py-42"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <blockquote className="text-center max-w-6xl mx-auto lg:px-24">
                  <span className="block font-degular font-bold text-3xl lg:text-4xl mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </span>
                  <cite className="block not-italic text-neutral-500 dark:text-neutral-600 text-xl lg:text-2xl font-semibold font-degular">
                    {testimonial.attribution}
                  </cite>
                </blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
