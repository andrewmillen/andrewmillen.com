export default function Tag({ content }) {
  return (
    <div className="inline-block uppercase bg-yellow-200 dark:bg-yellow-300 font-display font-semibold px-3 py-1 rounded-full text-sm leading-none md:text-base md:leading-none text-neutral-900">
      {content}
    </div>
  );
}
