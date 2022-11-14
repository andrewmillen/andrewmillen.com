export function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 h-14 w-14 left-4 lg:left-10 xl:left-20 z-10 lg:h-20 lg:w-20 bg-white shadow-lg rounded-full hover:bg-gray-100 active:scale-95"
    >
      <span className="font-degular font-bold text-gray-500 text-4xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
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
      className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 h-14 w-14 right-4 lg:right-10 xl:right-20 z-10 lg:h-20 lg:w-20 bg-white shadow-lg rounded-full hover:bg-gray-100 active:scale-95"
    >
      <span className="sr-only"> Next</span>
      <span className="font-degular font-bold text-gray-500 text-4xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="relative -top-1">→</span>
      </span>
    </button>
  );
}
