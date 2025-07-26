import Image from "next/image";

export default function Button({ icon, label, url, background }) {
  return (
    <a href={url} className="inline-block" target="_blank">
      <span className={`flex space-x-3 p-3 sm:p-4 rounded-sm ${background}`}>
        <Image
          className="inline-block"
          width="16"
          height="16"
          src={`/icon-${icon}.svg`}
        />
        <span className="inline-block font-display font-semibold text-lg leading-none">
          {label}
        </span>
      </span>
    </a>
  );
}
