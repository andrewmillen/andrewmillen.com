import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function Introduction({ content }) {
  return (
    <header>
      <div className="container xl:h-[95vh] max-h-[800px] flex flex-col lg:justify-between py-12 lg:py-32">
        <div className="flex flex-col gap-12 mb-24 md:mb-32 lg:mb-48 xl:mb-0">
          <Breadcrumb />
          <div className="max-w-5xl">
            <h1 className="display inline">{content.lead}</h1>
            <p className="display inline text-muted mb-0">
              {` `}
              {content.summary}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 lg:flex-row lg:gap-12 mb-4">
          {content.quickLinks.map((link, index) => (
            <li key={index} className="text-xl flex items-center gap-4">
              <div className="md:text-3xl">{link.emoji}</div>
              {link.external ? (
                <a
                  href={link.url}
                  className="textLink font-display font-semibold md:text-2xl"
                  nofollow="true"
                  noreferrer="true"
                  target="_blank"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  className="textLink font-display font-semibold md:text-2xl"
                  href={link.url}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
