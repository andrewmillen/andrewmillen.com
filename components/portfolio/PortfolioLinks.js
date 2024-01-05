import Link from "next/link";

export default function PortfolioLinks() {
  return (
    <section className="py-12 lg:py-20 xl:py-32 border-b border-neutral-300 dark:border-neutral-800">
      <div className="container">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-4 lg:text-center lg:w-1/3">
            <h2 className="text-neutral-500 font-degular font-semibold text-sm lg:text-md uppercase">
              Resume
            </h2>
            <div className="flex lg:justify-center space-x-8">
              <Link
                href="/resume"
                target="_blank"
                className="textLink font-semibold text-lg lg:text-xl"
              >
                View Online
              </Link>
              <Link
                href="/andrew-millen-resume.pdf"
                target="_blank"
                className="textLink font-semibold text-lg lg:text-xl"
              >
                Download PDF
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:text-center lg:w-1/3">
            <h2 className="text-neutral-500 font-degular font-semibold text-sm lg:text-md uppercase">
              Contact
            </h2>
            <div className="flex lg:justify-center space-x-8">
              <Link
                href="mailto:andrewmillen1+portfolio@gmail.com"
                target="_blank"
                className="textLink font-semibold text-lg lg:text-xl"
              >
                Email Me
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:text-center lg:w-1/3">
            <h2 className="text-neutral-500 font-degular font-semibold text-sm lg:text-md uppercase">
              Links
            </h2>
            <div className="flex lg:justify-center space-x-8">
              <Link
                href="https://www.linkedin.com/in/andrew-millen/"
                target="_blank"
                className="textLink font-semibold text-lg lg:text-xl"
              >
                LinkedIn
              </Link>
              <Link
                href="https://dribbble.com/andrewmillen"
                target="_blank"
                className="textLink font-semibold text-lg lg:text-xl"
              >
                Dribbble
              </Link>
              <Link
                href="https://codepen.io/andrewmillen"
                target="_blank"
                className="textLink font-semibold text-lg lg:text-xl"
              >
                CodePen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
