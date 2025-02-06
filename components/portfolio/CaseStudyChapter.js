import Image from "next/image";

export default function CaseStudyChapter({
  src,
  alt,
  video,
  children,
  layout,
  width,
  height,
}) {
  return (
    <>
      <div
        className={`flex flex-col ${
          layout === "reverse"
            ? "lg:flex-row-reverse lg:space-x-24 lg:space-x-reverse"
            : layout === "vertical"
            ? "lg:flex-col-reverse lg:space-y-4 lg:space-y-reverse"
            : "lg:flex-row lg:space-x-24"
        } items-center max-w-none my-12 lg:my-48`}
      >
        {layout === "vertical" ? (
          video ? (
            <video
              width={width || "1200"}
              height={height || "900"}
              preload="metadata"
              autoPlay="autoplay"
              muted
              loop
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width || "1200"}
              height={height || "900"}
              className="max-w-full"
            />
          )
        ) : (
          <div className="lg:w-1/2">
            {video ? (
              <video
                width={width || "800"}
                height={height || "600"}
                preload="metadata"
                autoPlay="autoplay"
                muted
                loop
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={src}
                alt={alt}
                width={width || "800"}
                height={height || "600"}
                className="w-full max-w-xl"
              />
            )}
          </div>
        )}
        <div
          className={`w-full ${
            layout === "vertical" ? "max-w-3xl" : "max-w-2xl lg:w-1/2"
          } prose-h2:my-6`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
