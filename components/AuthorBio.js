import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <aside className="text-left mt-16 md:mt-24 lg:mt-32 container">
      <Image
        src="/andrew-millen.jpg"
        width={75}
        height={75}
        alt="Andrew looking suave in a leather jacket"
        className="rounded-full mb-4"
      />
      <p className="text-lg md:text-xl leading-normal text-neutral-700 dark:text-neutral-400 max-w-2xl">
        Andrew Millen is a hybrid UI/UX designer with a background in
        copywriting and front-end development.{" "}
        <Link href="/" className="textLink">
          See some of his work
        </Link>
        .
      </p>
    </aside>
  );
}
