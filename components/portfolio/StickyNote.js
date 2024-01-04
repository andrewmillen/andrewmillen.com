export default function StickyNote({ content }) {
  return (
    <div className="bg-yellow-200 dark:bg-yellow-300 h-[170px] w-[170px] p-4 shadow-md dark:shadow-black">
      <span className="font-bold font-degular text-lg dark:text-neutral-900 leading-tight">
        {content}
      </span>
    </div>
  );
}
