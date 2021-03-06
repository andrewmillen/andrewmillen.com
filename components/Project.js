export default function Project({
  switchLayout,
  name,
  description,
  tags,
  largeImage,
  imageLink,
  imageSrc,
  imageSrc2x,
  imageAlt,
  buttonLink,
  buttonText,
}) {
  return (
    <section className="py-8">
      <div className="container lg:flex lg:items-center">
        <div className={`lg:w-1/2 ${switchLayout && "lg:order-2"}`}>
          <a
            rel="nofollow noreferrer"
            tabIndex="-1"
            target="_blank"
            href={imageLink}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              srcSet={imageSrc2x}
              className={`relative z-20 mx-auto mb-8 lg:mb-0 ${
                largeImage ? "portfolio-image-large" : "portfolio-image"
              }`}
            />
          </a>
        </div>

        <div className={`text-center lg:text-left lg:pl-8 lg:w-1/2`}>
          <h2 className="text-3xl mb-2 font-semibold">
            <a
              rel="nofollow noreferrer"
              target="_blank"
              href="https://medium.com/@andrewmillen/designing-a-better-way-to-give-76ffeaf53f89"
            >
              {name}
            </a>
          </h2>

          <ul className="flex justify-center w-full mb-4 lg:justify-start">
            {tags.map((tag, index) => {
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
            {description}
          </p>

          <hr className="absolute mt-6 left-0 w-screen transform translate-y-1 z-0" />
          <a
            className="button"
            target="_blank"
            rel="nofollow noreferrer"
            href={buttonLink}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
