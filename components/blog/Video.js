export default function Video({ src, width, height, caption, autoplay, loop }) {
  const autoplayValues = {
    playsInline: true,
    autoPlay: "autoplay",
    muted: true,
  };

  return (
    <div>
      <figure className="not-prose">
        <video
          width={width}
          height={height}
          preload="metadata"
          {...(autoplay && { ...autoplayValues })}
          {...(loop && { loop })}
        >
          <source src={src + ".mp4"} type="video/mp4" />
          <source src={src + ".ogg"} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <figcaption className="mt-2 text-neutral-600 dark:text-neutral-400 text-base">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}
