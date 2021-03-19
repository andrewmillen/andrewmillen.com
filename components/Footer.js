import Link from "next/link";
import DividerLine from "@/components/DividerLine.js";

export default function Footer({ cta }) {
  return (
    <footer>
      <div className="container text-center">
        <DividerLine />

        <a href={`mailto:${cta.email}`} className="button z-10">
          {cta.text}
        </a>

        <ul className="flex flex-col justify-center md:flex-row py-12">
          <li>
            <Link href="/">
              <a className="py-4 px-8 lg:px-6 text-base font-semibold hover:opacity-50 block">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="py-4 px-8 lg:px-6 text-base font-semibold hover:opacity-50 block">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://dribbble.com/andrewmillen"
              rel="nofollow noreferrer"
              target="_blank"
              className="py-4 px-8 lg:px-6 text-base font-semibold hover:opacity-50 block"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/andrewmillen/"
              rel="nofollow noreferrer"
              target="_blank"
              className="py-4 px-8 lg:px-6 text-base font-semibold hover:opacity-50 block"
            >
              Codepen
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/andrewsmillen"
              rel="nofollow noreferrer"
              target="_blank"
              className="py-4 px-8 lg:px-6 text-base font-semibold hover:opacity-50 block"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
