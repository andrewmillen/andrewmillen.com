import Image from "next/image";

export default function CaseStudyChapter({ src, alt, video, children }) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-24 items-center max-w-none my-12 lg:my-48">
      <div className="lg:w-1/2">
        {video ? (
          <video
            width="800"
            height="600"
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
            width="800"
            height="600"
            className="w-full max-w-xl"
          />
        )}
      </div>
      <div className="w-full max-w-2xl lg:w-1/2 prose-h2:my-6">{children}</div>
    </div>
  );
}
