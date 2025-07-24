export default function Introduction({ content }) {
  return (
    <header className="py-4 sm:py-8 md:py-12 lg:py-20 dark:border-neutral-800">
      <div className="container">
        <h1 className="h1 mt-4">{content.name}</h1>
        <p className="h1 inline-block">{content.title}</p>
        <p className="text-lg leading-relaxed 2xl:text-xl 2xl:leading-relaxed mt-16 sm:mt-24 2xl:mt-44 mb-6 lg:mb-12 text-neutral-800 dark:text-neutral-200 max-w-3xl">
          {content.summary}
        </p>
        <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 mb-12">
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
    </header>
  );
}
