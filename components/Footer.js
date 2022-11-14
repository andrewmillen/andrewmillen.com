import { format } from "date-fns";

const currentYear = format(new Date(), "yyyy");

export default function Footer() {
  return (
    <footer className="py-4 md:pt-16 md:pb-8 lg:pt-24 lg:pb-12">
      <div className="container">
        <svg viewBox="0 0 172 172" className="w-10 h-10 mb-8">
          <path
            className="st0"
            d="M86,0C38.5,0,0,38.5,0,86s38.5,86,86,86c47.5,0,86-38.5,86-86S133.5,0,86,0z M53.7,126L37.1,79l8.5-33l28.1,80
  H53.7z M89.7,126L61.6,46h20l16.5,47L89.7,126z M128.9,126h-18.6V46h18.6V126z"
          />
        </svg>
        <p>
          This site was built with Next.js and Tailwind CSS and is hosted by
          Vercel. The type is set in Degular by Ohno type.
        </p>
        <p>© {currentYear} Andrew Millen. All rights reserved.</p>
      </div>
    </footer>
  );
}
