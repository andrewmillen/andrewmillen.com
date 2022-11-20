export default function HomepageHeader({ content }) {
  return (
    <header className="py-4 md:py-8 lg:py-12 xl:py-20 border-b border-neutral-200 dark:border-neutral-700">
      <div className="container">
        <h1 className="mt-4 font-bold leading-none text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl">
          {content.name}
        </h1>
        <p className="inline-block font-bold text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-none">
          {content.title}
        </p>
        <div className="text-3xl lg:text-5xl leading-relaxed mb-4 mt-20 lg:mt-30 xl:mt-40">
          👋
        </div>
        <p className="text-xl lg:text-2xl leading-normal lg:leading-normal mb-6 lg:mb-12 text-neutral-600 dark:text-neutral-400 max-w-5xl">
          <span className="text-neutral-800 dark:text-white font-semibold">
            {content.greeting}
          </span>{" "}
          {content.intro}
        </p>
        <p
          className="text-xl lg:text-2xl leading-normal lg:leading-normal mb-6 lg:mb-12 font-semibold"
          dangerouslySetInnerHTML={{ __html: content.cta }}
        ></p>
      </div>
    </header>
  );
}
