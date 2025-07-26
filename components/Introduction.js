export default function Introduction({ content }) {
  return (
    <header>
      <div className="container py-[8vw] 2xl:py-28 2xl:h-[90vh] 2xl:flex 2xl:flex-col 2xl:justify-between">
        <div>
          <h1 className="h1">{content.name}</h1>
          <p className="h1">{content.title}</p>
        </div>
        <div>
          <p className="text-base xs:text-lg leading-normal lg:leading-relaxed xl:text-xl mt-20 md:mt-32 2xl:mt-0 mb-8 lg:mb-12 text-neutral-800 dark:text-neutral-200 max-w-xl lg:max-w-3xl">
            {content.summary}
          </p>
          <ul className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-8 mb-4">
            {content.quickLinks.map((link, index) => (
              <li key={index}>
                <span className="inline-block mr-2 text-xl">{link.emoji}</span>
                <a
                  href={link.url}
                  className="textLink font-display font-semibold text-xl"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
