export default function SliderArrow({ direction, emblaApi }) {
  const isPrev = direction === "Previous";

  const onClick = () => {
    if (!emblaApi) return;
    isPrev ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  };

  const icon = isPrev ? "←" : "→";
  const label = isPrev ? "Previous" : "Next";

  return (
    <button
      onClick={onClick}
      className="relative size-16 lg:size-20 font-display font-bold text-5xl lg:text-6xl bg-white shadow-lg rounded-full dark:bg-neutral-900 transform active:scale-95 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition duration-75 hover:cursor-pointer"
    >
      <span className="relative -top-1">{icon}</span>
      <span className="sr-only">{label}</span>
    </button>
  );
}
