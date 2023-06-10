import Image from "next/image";

export default function ImageWithCaption({ src, alt, width, height, caption }) {
  return (
    <figure className="py-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="xl:max-w-5xl"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
