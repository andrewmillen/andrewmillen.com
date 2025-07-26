export default function Tag({ content }) {
  return (
    <div className="inline-block uppercase bg-yellow-200 dark:bg-yellow-500/10 px-4 py-1 font-semibold dark:font-normal rounded-full text-sm text-yellow-700 dark:text-yellow-200">
      {content}
    </div>
  );
}
