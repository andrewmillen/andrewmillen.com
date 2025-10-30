import Image from "next/image";

export default function Figure({
  type,
  src,
  width,
  height,
  centered,
  caption,
  quality,
  attribution,
  alt,
  ambient,
  children,
}) {
  const ambientSettings = {
    autoPlay: "autoplay",
    muted: true,
    loop: true,
  };

  return (
    <figure className={`not-prose ${centered ? "mx-auto" : ""}`}>
      {type == "image" ? (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt || ""}
          quality={quality || "80"}
        />
      ) : type == "video" ? (
        <video
          width={width}
          height={height}
          preload="metadata"
          playsInline
          {...(ambient && { ...ambientSettings })}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : type == "custom" ? (
        <div className="w-full" style={{ maxWidth: width }}>
          {children}
        </div>
      ) : null}
      {caption && (
        <figcaption
          style={{ maxWidth: width }}
          className={`mt-2 lg:mt-4 ${centered ? "text-center px-4" : ""}`}
        >
          <span
            className="block text-muted text-base"
            dangerouslySetInnerHTML={{ __html: caption }}
          ></span>
          {attribution && (
            <>
              <span className="block mt-1 uppercase text-xs">
                {attribution}
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
