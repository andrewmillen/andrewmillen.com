import Link from "next/link";

export default function PortfolioLinks({ groups }) {
  const isInternalLink = (href) => {
    return href.startsWith("/") || href.startsWith("mailto:");
  };

  const renderLink = (item, index) => {
    if (isInternalLink(item.href)) {
      return (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="textLink font-semibold lg:text-lg"
        >
          {item.label}
        </Link>
      );
    } else {
      return (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="textLink font-semibold lg:text-lg"
        >
          {item.label}
        </a>
      );
    }
  };

  return (
    <section className="py-12 lg:py-20 xl:py-32 border-b border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
          {groups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 md:text-center md:w-1/3"
            >
              <h2 className="h4">{group.title}</h2>
              <div className="flex md:justify-center space-x-4 lg:space-x-8">
                {group.items.map((item, index) => renderLink(item, index))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
