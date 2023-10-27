import { format } from "date-fns";
import Breadcrumb from "@/components/Breadcrumb";

const currentYear = format(new Date(), "yyyy");

export default function Footer() {
  return (
    <footer className="text-xs py-4 pt-16 md:pb-8 lg:pt-24 lg:pb-12 text-neutral-900 dark:text-neutral-500">
      <div className="container">
        <Breadcrumb url="/" />
        <p className="pb-1">
          This site was built with Next.js and Tailwind CSS and is hosted by
          Vercel. Headings are set in Degular by Ohno type.
        </p>
        <p>© {currentYear} Andrew Millen. All rights reserved.</p>
      </div>
    </footer>
  );
}
