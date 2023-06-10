export default function Footnote({ id, children }) {
  return (
    <div id={id} className="pt-4 flex space-x-2 prose-sm">
      <p>{id}.</p>
      {children}
    </div>
  );
}
