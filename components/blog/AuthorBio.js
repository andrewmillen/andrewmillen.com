import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <aside className="text-left flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-8 mt-16 md:mt-24 lg:mt-48 container">
      <Image
        src="/andrew-millen.jpg"
        width={75}
        height={75}
        alt="Andrew looking suave in a leather jacket"
        className="rounded-full"
      />
      <p className="text-md 2xl:text-lg leading-normal text-neutral-800 dark:text-neutral-400 max-w-xl">
        Andrew Millen is a hybrid UI/UX designer and front-end developer
        specializing in design systems.{" "}
        <Link href="/" className="textLink">
          See some of his work
        </Link>
        .
      </p>
    </aside>
  );
}
