import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/Tag";

export default function CaseStudyTeaser({
  thumbnail,
  tag,
  title,
  summary,
  slug,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20 px-0">
      <div className="w-full lg:w-1/2">
        <Link href={"/portfolio/" + slug}>
          <Image
            src={thumbnail}
            width="800"
            height="800"
            className="w-full max-w-xl mx-auto lg:max-w-full rounded-[30px]"
            alt=""
          />
        </Link>
      </div>
      <div className="w-full max-w-2xl mx-auto lg:w-1/2">
        <div className="lg:py-20">
          <Tag content={tag} />
          <Link href={"/portfolio/" + slug}>
            <h2 className="mt-2 mb-4 md:mb-10 h2">{title}</h2>
          </Link>
          <h3 className="sr-only">Summary</h3>
          <p className="mb-8">{summary}</p>
          <Link
            href={"/portfolio/" + slug}
            className="textLink font-semibold text-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
