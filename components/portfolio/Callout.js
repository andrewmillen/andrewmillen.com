export default function CaseStudyCallout({ headline, children }) {
  return (
    <div className="w-full max-w-[1000px] bg-amber-100 dark:bg-neutral-800 rounded-lg p-8 md:p-12 lg:p-16 mt-8 marker:text-yellow-400">
      <h2 className="max-w-2xl mx-auto mt-2!">{headline}</h2>
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  );
}
