export default function Button({ text }) {
  return (
    <button
      className="bg-red-100 text-red-900 px-8 py-4 rounded-full"
      onClick={(event) => (event.target.innerText = "You clicked me!")}
    >
      {text}
    </button>
  );
}
