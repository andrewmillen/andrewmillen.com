export default function CaseStudyCallout({ headline, children }) {
  return (
    <div className="w-full bg-amber-100 dark:bg-neutral-800 rounded-lg p-6 lg:p-12 callout-list">
      <h2 className="mt-2! w-full text-center">{headline}</h2>
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
