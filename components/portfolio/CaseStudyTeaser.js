import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";

export default function CaseStudyTeaser({
  thumbnail,
  tag,
  title,
  summary,
  slug,
  thumbnailBgColor,
}) {
  return (
    <div className="container flex flex-col-reverse space-y-reverse space-y-12 min-[56rem]:flex-row min-[56rem]:items-center min-[56rem]:space-y-0 min-[56rem]:space-x-10 lg:space-x-20">
      <div className="w-full lg:w-1/2">
        <Link href={"/portfolio/" + slug}>
          <Image
            src={thumbnail}
            width="500"
            height="500"
            className={`${thumbnailBgColor} max-w-2xl mx-auto lg:max-w-none w-full p-8 lg:p-12 rounded-3xl lg:rounded-4xl`}
            alt=""
          />
        </Link>
      </div>
      <div className="w-full max-w-2xl mx-auto lg:w-1/2">
        <Tag content={tag} />
        <Link href={"/portfolio/" + slug}>
          <h2 className="h2 mt-2 mb-6 lg:mb-10 text-4xl lg:text-5xl">
            {title}
          </h2>
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
  );
}
