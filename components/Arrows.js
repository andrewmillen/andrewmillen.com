export function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 left-10 z-10 h-20 w-20 bg-white shadow-lg rounded-full flex justify-center hover:bg-gray-100 active:scale-95"
    >
      <span className="sr-only">Previous</span>
      <svg
        width="45"
        height="41"
        viewBox="0 0 45 41"
        fill="none"
        className="self-center"
      >
        <path
          d="M0.455936 18.624L19.3999 0L26.3759 8.384C22.0239 11.648 18.3119 14.016 14.8559 16.064V16.128C20.8079 15.36 27.7839 15.04 35.2719 15.04H44.9999V25.152H35.2719C27.7839 25.152 20.8079 24.768 14.8559 24.064L14.7919 24.128C18.3119 26.176 22.0879 28.608 26.3759 31.808L19.3999 40.192L0.455936 21.568V18.624Z"
          fill="#6A6A6A"
        />
      </svg>
    </button>
  );
}

export function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 right-10 z-10 h-20 w-20 bg-white shadow-lg rounded-full flex justify-center hover:bg-gray-100 active:scale-95"
    >
      <span className="sr-only">Next</span>
      <svg
        width="45"
        height="41"
        viewBox="0 0 45 41"
        fill="none"
        className="self-center"
      >
        <path
          d="M44.5441 18.624L25.6001 0L18.6241 8.384C22.9761 11.648 26.6881 14.016 30.1441 16.064V16.128C24.1921 15.36 17.2161 15.04 9.72806 15.04H6.10352e-05V25.152H9.72806C17.2161 25.152 24.1921 24.768 30.1441 24.064L30.2081 24.128C26.6881 26.176 22.9121 28.608 18.6241 31.808L25.6001 40.192L44.5441 21.568V18.624Z"
          fill="#6A6A6A"
        />
      </svg>
    </button>
  );
}
