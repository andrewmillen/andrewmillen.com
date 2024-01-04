import Link from "next/link";
import StickyNote from "@/components/portfolio/StickyNote";

export default function CaseStudyTeaser({
  tag,
  title,
  summary,
  outcomes,
  slug,
}) {
  return (
    <div className="py-12 lg:py-20">
      <div className="bg-yellow-200 dark:bg-neutral-800 inline py-1 px-2 leading-none font-degular uppercase text-sm lg:text-md font-semibold text-neutral-600 dark:text-neutral-400">
        {tag}
      </div>
      <Link href={"/portfolio/" + slug}>
        <h2 className="mt-2 mb-10 text-3xl lg:text-5xl font-bold font-degular">
          {title}
        </h2>
      </Link>
      <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-20">
        <div className="w-full lg:w-1/2">
          <h3 className="text-neutral-500 text-sm lg:text-md font-semibold font-degular uppercase mb-2">
            Summary
          </h3>
          <p className="mb-8">{summary}</p>
          <Link
            href={"/portfolio/" + slug}
            className="textLink font-semibold text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-neutral-500 text-sm lg:text-md font-semibold font-degular uppercase mb-2">
            Outcomes
          </h3>
          <div className="flex flex-wrap">
            {outcomes.map((outcome, index) => (
              <div className={"mb-2 mr-2"} key={index}>
                <StickyNote content={outcome} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
