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
    <Link href={"/portfolio/" + slug}>
      <div className="container flex flex-col-reverse space-y-reverse space-y-4 min-[56rem]:flex-row min-[56rem]:items-center min-[56rem]:space-y-0 min-[56rem]:space-x-10 lg:space-x-20 py-12 md:py-16 lg:py-20">
        <div className="w-full lg:w-1/2">
          <Image
            src={thumbnail}
            width="500"
            height="500"
            className={`${thumbnailBgColor} max-w-2xl mx-auto lg:max-w-none w-full p-8 lg:p-12 rounded-3xl lg:rounded-4xl`}
            alt=""
            quality="100"
          />
        </div>
        <div className="w-full max-w-2xl mx-auto lg:w-1/2">
          <Tag content={tag} />
          <h2 className="h2 mt-2 mb-6 lg:mb-10 text-4xl lg:text-5xl">
            {title}
          </h2>
          <h3 className="sr-only">Summary</h3>
          <p className="mb-8 lg:text-lg">{summary}</p>
        </div>
      </div>
    </Link>
  );
}
