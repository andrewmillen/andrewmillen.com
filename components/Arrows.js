export function PrevArrow({ onClick }) {
  return (
    <button
      // Not sure where onClick is defined... maybe in Slick?
      // But this doesn't work without it.
      onClick={onClick}
      className="-left-4 lg:-left-4 xl:-left-4 2xl:-left-32 hidden lg:block absolute top-1/2 transform -translate-y-1/2 h-14 w-14 z-10 lg:h-20 lg:w-20 bg-white shadow-lg rounded-full dark:bg-neutral-900 active:scale-95 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition duration-75"
    >
      <span className="font-display font-bold text-4xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="relative -top-1">←</span>
      </span>
      <span className="sr-only"> Previous</span>
    </button>
  );
}

export function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="-right-4 lg:-right-4 xl:-right-4 2xl:-right-32 hidden lg:block absolute top-1/2 transform -translate-y-1/2 h-14 w-14 z-10 lg:h-20 lg:w-20 bg-white shadow-lg rounded-full dark:bg-neutral-900 active:scale-95 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition duration-75"
    >
      <span className="sr-only">Next </span>
      <span className="font-display font-bold text-4xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="relative -top-1">→</span>
      </span>
    </button>
  );
}
