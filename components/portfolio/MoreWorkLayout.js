import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function MoreWorkLayout({ title, children }) {
  return (
    <div className="overflow-x-hidden">
      <header className="pt-12 lg:pt-20 text-center">
        <div className="container">
          <div className="flex flex-col space-y-2 items-center">
            <div className="inline-flex flex-col items-center mb-4">
              <Breadcrumb url="/" />
              <h1 className="h2 mt-2">{title}</h1>
            </div>

            <Link className="textLink text-lg" href={`/portfolio`}>
              <span className="font-display">←</span> Portfolio
            </Link>
          </div>
        </div>
      </header>

      <div className="border-b border-neutral-200 dark:border-neutral-800 px-8 sm:px-12 py-24">
        {children}
      </div>
    </div>
  );
}
