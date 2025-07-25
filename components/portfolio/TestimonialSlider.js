import SliderArrow from "@/components/SliderArrow";
import testimonials from "@/content/testimonials.json";
import useEmblaCarousel from "embla-carousel-react";

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="bg-yellow-200 dark:bg-yellow-300 text-neutral-900 font-display py-12 md:py-16 xl:py-32 ">
      <h2 className="sr-only">Testimonials</h2>
      <div className="relative lg:container">
        <div className="overflow-hidden lg:mx-24" ref={emblaRef}>
          <div className="flex items-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <blockquote className="text-center max-w-6xl mx-auto px-12 lg:px-16">
                  <span className="block font-bold text-3xl lg:text-4xl mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </span>
                  <cite className="block not-italic text-neutral-500 dark:text-neutral-600 text-xl lg:text-2xl font-semibold">
                    {testimonial.attribution}
                  </cite>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-4 px-12 2xl:px-0 flex space-x-2 justify-center lg:justify-between lg:items-center lg:absolute lg:mt-0 lg:inset-0">
          <SliderArrow emblaApi={emblaApi} direction="Previous" />
          <SliderArrow emblaApi={emblaApi} direction="Next" />
        </div>
      </div>
    </section>
  );
}
