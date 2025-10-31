import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function Introduction({ content }) {
  return (
    <header>
      <div className="container xl:h-[95vh] max-h-[800px] flex flex-col xl:justify-between py-12 lg:py-24 xl:py-32">
        <div className="flex flex-col gap-12 mb-[24vw] xl:mb-0">
          <Breadcrumb />
          <div className="max-w-3xl">
            <h1 className="font-bold leading-[1.2] text-2xl sm:text-3xl md:text-4xl inline">
              {content.lead}
            </h1>
            <p className="font-bold font-display leading-[1.2] text-2xl sm:text-3xl md:text-4xl inline text-muted mb-0">
              {` `}
              {content.summary}
            </p>
          </div>
        </div>
        <ul className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-8 mb-4">
          {content.quickLinks.map((link, index) => (
            <li key={index} className="text-xl">
              <span className="mr-2">{link.emoji}</span>
              {link.external ? (
                <a
                  href={link.url}
                  className="textLink font-display font-semibold"
                  nofollow="true"
                  noreferrer="true"
                  target="_blank"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  className="textLink font-display font-semibold"
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
