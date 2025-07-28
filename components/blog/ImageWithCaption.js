import Image from "next/image";

export default function ImageWithCaption({
  src,
  alt,
  width,
  height,
  caption,
  attribution,
}) {
  return (
    <figure className="not-prose">
      <Image src={src} alt={alt} width={width} height={height} />
      {caption && (
        <figcaption>
          <span
            className="block mt-2 text-neutral-600 dark:text-neutral-400 text-base"
            dangerouslySetInnerHTML={{ __html: caption }}
          ></span>
          {attribution && (
            <>
              <span className="block mt-1 uppercase text-neutral-500 dark:text-neutral-400 text-xs">
                {attribution}
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
