export default function Tag({ content }) {
  return (
    <div className="inline-block uppercase bg-yellow-100 dark:bg-yellow-300 px-4 py-1 font-semibold rounded-full text-sm text-yellow-700">
      {content}
    </div>
  );
}
