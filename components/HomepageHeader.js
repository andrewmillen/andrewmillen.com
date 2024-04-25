export default function HomepageHeader({ content }) {
  return (
    <header className="py-4 md:py-8 lg:py-12 xl:py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container">
        <h1 className="mt-4 font-bold leading-none text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl">
          {content.name}
        </h1>
        <p className="h1 inline-block font-bold text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-none">
          {content.title}
        </p>
        <div className="text-3xl lg:text-4xl leading-relaxed mb-4 mt-20 lg:mt-30 xl:mt-40">
          {/* 👋 */}
        </div>
        <p className="text-xl leading-relaxed lg:leading-relaxed mb-6 lg:mb-12 text-neutral-800 dark:text-neutral-200 max-w-3xl">
          {content.intro}
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 mb-12">
          {content.quickLinks.map((link, index) => (
            <div key={index}>
              <span className="inline-block mr-2 text-xl">{link.emoji}</span>
              <a
                href={link.url}
                className="textLink font-degular font-semibold text-xl"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
