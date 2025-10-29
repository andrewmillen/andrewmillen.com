import Breadcrumb from "@/components/Breadcrumb";

export default function Introduction({ content }) {
  return (
    <header>
      <div className="container min-h-[90vh] flex flex-col py-12 xl:py-20 gap-24">
        <Breadcrumb />
        <div className="flex flex-col justify-center flex-1">
          <h1 className="h2 font-bold font-display">{content.lead}</h1>
          <p className="h2 font-bold font-display text-neutral-600 dark:text-neutral-400 mb-0">
            {` `}
            {content.summary}
          </p>
        </div>
        <ul className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-8 mb-4">
          {content.quickLinks.map((link, index) => (
            <li key={index}>
              {link.emoji && <span className="text-xl mr-2">{link.emoji}</span>}
              <a
                href={link.url}
                className="textLink font-display font-semibold text-xl"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
