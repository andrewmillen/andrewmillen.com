export default function Video({ src, width, height, caption }) {
  return (
    <div className="my-8 lg:my-12">
      <figure>
        <video width={width} height={height} controls preload="metadata">
          <source src={src + ".mp4#t=0.5"} type="video/mp4" />
          <source src={src + ".ogg#t=0.5"} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <figcaption className="text-sm">{caption}</figcaption>
      </figure>
    </div>
  );
}
