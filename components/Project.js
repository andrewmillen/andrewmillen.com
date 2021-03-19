import DividerLine from "@/components/DividerLine.js";

export default function Project({ content, layout }) {
  return (
    <li className="py-8">
      <div
        className={`container lg:flex lg:items-center ${
          layout === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="lg:w-1/2">
          <a
            rel="nofollow noreferrer"
            tabIndex="-1"
            target="_blank"
            href={content.imageLink}
          >
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              srcSet={content.imageSrc2x}
              className={`relative z-20 mx-auto mb-8 lg:mb-0 ${
                content.largeImage ? "portfolio-image-large" : "portfolio-image"
              }`}
            />
          </a>
        </div>

        <div className="text-center lg:text-left lg:pl-8 lg:w-1/2">
          <h2 className="text-3xl mb-2 font-semibold">
            <a
              rel="nofollow noreferrer"
              target="_blank"
              href={content.buttonLink}
            >
              {content.name}
            </a>
          </h2>

          <ul className="flex justify-center w-full mb-4 lg:justify-start">
            {content.tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-200 rounded-sm mr-2 py-1 px-2 font-semibold text-gray-700 uppercase tracking-widest text-xs"
                >
                  {tag}
                </li>
              );
            })}
          </ul>

          <p className="mb-4 max-w-xl mx-auto lg:mb-8 lg:max-w-md lg:mx-0">
            {content.description}
          </p>

          <DividerLine />

          <a
            className="button"
            target="_blank"
            rel="nofollow noreferrer"
            href={content.buttonLink}
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </li>
  );
}
