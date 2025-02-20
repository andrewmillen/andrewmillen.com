import Link from "next/link";

export default function FeaturedLink({ content }) {
  return (
    <section className="py-8 sm:py-12 md:py-116 lg:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="sr-only">Featured Link</h2>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-baseline mb-4 xl:mb-8">
          <h3 className="h3">{content.name}</h3>
          <p className="h4 mb-2 lg:mb-0">{content.label}</p>
        </div>
        <p className="text-lg 2xl:text-xl mb-8 lg:mb-12 xl:mb-16 leading-normal lg:leading-normal text-neutral-700 dark:text-neutral-400 max-w-3xl">
          {content.description}
        </p>
        <Link
          className="textLink text-lg 2xl:text-xl lg:leading-normal font-semibold"
          href={content.link}
          target="_blank"
        >
          {content.linkLabel}
        </Link>
      </div>
    </section>
  );
}
