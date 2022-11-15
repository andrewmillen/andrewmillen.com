import Link from "next/link";

export default function Project({ content }) {
  return (
    <section className="py-8 md:py-12 lg:py-24 border-b border-neutral-200">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-baseline mb-4 lg:mb-8">
          <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
            {content.name}
          </h2>
          <p className="uppercase tracking-wider text-neutral-400 font-semibold">
            {content.label}
          </p>
        </div>
        <p className="text-lg lg:text-2xl mb-8 lg:mb-12 xl:mb-24 leading-normal lg:leading-normal text-neutral-600 max-w-5xl">
          {content.description}
        </p>
        <Link
          className="textLink only:text-lg lg:text-2xl lg:leading-normal font-semibold"
          href={content.link}
        >
          {content.linkLabel}
        </Link>
      </div>
    </section>
  );
}
