import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <hr className="absolute mt-6 left-0 w-screen transform translate-y-1" />

        <button
          className="z-10"
          onClick={() => (window.location = "mailto:andrewmillen1@gmail.com")}
        >
          Let's Chat
        </button>

        <ul className="flex flex-col justify-center md:flex-row py-12">
          <li>
            <Link href="/">
              <a className="py-4 px-8 lg:px-6 text-base font-semibold hover:opacity-50 block">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
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
