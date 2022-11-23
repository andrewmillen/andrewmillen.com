import Image from "next/image";

export default function ImageWithCaption({ src, alt, width, height, caption }) {
  return (
    <figure>
      <Image src={src} alt={alt} width={width} height={height} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
