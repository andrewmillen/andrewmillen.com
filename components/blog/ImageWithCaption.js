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
    <figure className="lg:my-24">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="xl:max-w-5xl"
      />
      {caption && (
        <figcaption className="prose">
          <span
            className="text-neutral-500"
            dangerouslySetInnerHTML={{ __html: caption }}
          ></span>
          {attribution && (
            <>
              <br />
              <span className="uppercase text-neutral-400 dark:text-neutral-600 text-sm">
                {attribution}
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
