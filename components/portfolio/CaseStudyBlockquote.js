export default function CaseStudyBlockquote({ quotation, citation }) {
  return (
    <blockquote className="not-prose my-12 pl-4 lg:pl-8 border-l-4 border-l-yellow-200">
      <span className="block mb-4 font-display text-xl lg:text-2xl font-bold">
        &#8220;{quotation}&#8221;
      </span>
      <cite className="text-neutral-500">{citation}</cite>
    </blockquote>
  );
}
