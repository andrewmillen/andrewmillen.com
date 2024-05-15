import { format } from "date-fns";
import Breadcrumb from "@/components/Breadcrumb";

const currentYear = format(new Date(), "yyyy");

export default function Footer() {
  return (
    <footer className="py-4 md:py-8 lg:py-24 text-neutral-900 dark:text-neutral-500">
      <div className="container">
        <Breadcrumb url="/" />
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4 mt-8">
          <a
            className="textLink"
            nofollow="true"
            noreferrer="true"
            target="_blank"
            href="https://dribbble.com/andrewmillen"
          >
            Dribbble
          </a>
          <a
            className="textLink"
            nofollow="true"
            noreferrer="true"
            target="_blank"
            href="https://github.com/andrewmillen"
          >
            Github
          </a>
          <a className="textLink" href="/blog">
            Blog
          </a>
        </div>
        <p className="pt-8 pb-1">
          This site was built with Next.js and Tailwind CSS and is hosted by
          Vercel. Headings are set in Degular by Ohno type.
        </p>
        <p className="mt-2">
          © {currentYear} Andrew Millen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
