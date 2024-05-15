import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function MoreWorkLayout({ title, children }) {
  return (
    <div className="overflow-x-hidden">
      <header className="pt-12 pb-0 lg:pt-20 lg:pb-12 text-center">
        <div className="container">
          <div className="flex flex-col space-y-2 items-center">
            <div className="inline-flex flex-col lg:flex-row space-x-4 items-center mb-4">
              <Breadcrumb url="/" />
              <h1 className="leading-none mt-2 lg:mt-0 font-bold text-2xl lg:text-4xl">
                {title}
              </h1>
            </div>

            <Link className="textLink text-lg" href={`/portfolio`}>
              ← Portfolio
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
