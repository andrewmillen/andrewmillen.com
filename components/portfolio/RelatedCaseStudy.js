import Link from "next/link";

import Image from "next/image";

export default function RelatedCaseStudy({ postData }) {
  return (
    <Link href={"/portfolio/" + postData.slug}>
      <section className="py-12 lg:py-24 xl:py-28 2xl:py-32 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center space-y-reverse space-y-12 lg:space-y-0 lg:space-x-20 px-0">
            <div className="w-full lg:w-1/2">
              <Image
                src={postData.frontMatter.og}
                width="1200"
                height="630"
                className="w-full max-w-xl mx-auto lg:max-w-full rounded-xl"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="font-degular text-2xl mb-8 text-neutral-700 dark:text-neutral-400">
                Related Case Study
              </div>
              <div className="inline-block uppercase bg-yellow-200 dark:bg-yellow-300 leading-none font-degular font-semibold px-3 py-1 rounded-full text-md text-neutral-900">
                {postData.frontMatter.tag}
              </div>
              <h2 className="mt-2 mb-4 md:mb-8 h2">
                {postData.frontMatter.title}
              </h2>
              <p>{postData.frontMatter.summary}</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
