import Link from "next/link";
import Tag from "@/components/Tag";

export default function FeaturedLink({ content }) {
  return (
    <li className="py-8 sm:py-12 md:py-116 lg:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container">
        <div className="flex items-start flex-col-reverse space-y-reverse space-y-2 lg:flex-row lg:space-y-0 lg:justify-between lg:items-baseline mb-4 xl:mb-8">
          <h3 className="h3">{content.name}</h3>
          <Tag content={content.tag} />
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
    </li>
  );
}
