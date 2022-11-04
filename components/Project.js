import Link from "next/link";

export default function Project({ content }) {
  return (
    <section className="py-8 lg:py-12 xl:py-24 border-b border-neutral-200">
      <div className="container">
        <div className="flex justify-between align-text-bottom mb-4 lg:mb-12">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {content.name}
          </h2>
          <p className="uppercase tracking-wider text-neutral-500">
            {content.label}
          </p>
        </div>
        <p className="text-lg lg:text-2xl mb-8 leading-relaxed text-neutral-500">
          {content.description}
        </p>
        <Link
          className="textLink only:text-lg lg:text-2xl font-semibold"
          href={content.link}
        >
          {content.linkLabel}
        </Link>
      </div>
    </section>
  );
}
