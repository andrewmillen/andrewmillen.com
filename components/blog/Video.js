export default function Video({ src, width, height, caption, autoplay, loop }) {
  const autoplayValues = {
    playsinline: true,
    autoplay: "autoplay",
    muted: true,
  };

  return (
    <div>
      <figure>
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
        <figcaption className="prose text-neutral-500">{caption}</figcaption>
      </figure>
    </div>
  );
}
