import { format } from "date-fns";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import global from "@/content/global.json";

const currentYear = format(new Date(), "yyyy");

export default function Footer() {
  const links = global.footer.links;

  return (
    <footer className="py-8 md:py-12 lg:py-24 text-neutral-900 dark:text-neutral-500">
      <div className="container">
        <Breadcrumb url="/" />
        <ul className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4 mt-8">
          {links.map((link, index) =>
            link.external ? (
              <li key={index}>
                <a
                  className="textLink"
                  nofollow="true"
                  noreferrer="true"
                  target="_blank"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ) : (
              <li key={index}>
                <Link className="textLink" href={link.url}>
                  {link.title}
                </Link>
              </li>
            )
          )}
        </ul>
        <p className="pt-8">
          This site is powered by Next.js, styled by Tailwind CSS, and hosted on
          Vercel. Content is written in MDX. Headings are set in Degular by Ohno
          type.
        </p>
      </div>
    </footer>
  );
}
