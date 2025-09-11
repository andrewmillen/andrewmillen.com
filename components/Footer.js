import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import global from "@/content/global.json";

export default function Footer() {
  const links = global.footer.links;
  const colophon = global.footer.colophon;

  return (
    <footer className="py-8 md:py-12 lg:py-24 text-neutral-900 dark:text-neutral-300">
      <div className="container">
        <Breadcrumb />
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
        <p className="pt-8 text-sm">{colophon}</p>
      </div>
    </footer>
  );
}
