import Link from "next/link";

export default function Breadcrumb({
  parentPageUrl,
  parentPageLabel,
  activePageLabel,
}) {
  return (
    <div className="inline-flex items-center gap-3 font-display font-bold text-2xl">
      <Link
        href={parentPageUrl || "/"}
        className="inline-flex items-center gap-3 text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-200"
      >
        <svg viewBox="0 0 172 172" className="w-10 h-10">
          <path
            fill="currentColor"
            d="M86,0C38.5,0,0,38.5,0,86s38.5,86,86,86c47.5,0,86-38.5,86-86S133.5,0,86,0z M53.7,126L37.1,79l8.5-33l28.1,80
H53.7z M89.7,126L61.6,46h20l16.5,47L89.7,126z M128.9,126h-18.6V46h18.6V126z"
          />
        </svg>
        {parentPageUrl && <span>{parentPageLabel}</span>}
      </Link>
      {activePageLabel && (
        <>
          <span className="font-normal text-lg">/</span>
          <span className="opacity-70 font-normal ">{activePageLabel}</span>
        </>
      )}
    </div>
  );
}
