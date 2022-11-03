export default function Project({ content }) {
  return (
    <section className="py-8">
      <div className="container">
        <h2>{content.name}</h2>
        <p>{content.label}</p>
        <p>{content.description}</p>
      </div>
    </section>
  );
}
