import Link from "next/link";

export default function Project({ content }) {
  return (
    <section className="py-8 md:py-12 lg:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-baseline mb-4 lg:mb-8">
          <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
            {content.name}
          </h2>
          <p className="text-sm 2xl:text-md uppercase tracking-wider text-neutral-400 dark:text-neutral-600 font-semibold mb-2 lg:mb-0">
            {content.label}
          </p>
        </div>
        <p className="text-lg 2xl:text-xl mb-8 lg:mb-12 xl:mb-16 leading-normal lg:leading-normal text-neutral-600 dark:text-neutral-400 max-w-3xl">
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
