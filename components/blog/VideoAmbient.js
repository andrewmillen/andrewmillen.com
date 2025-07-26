export default function Video({ src, rounded }) {
  return (
    <div className="not-prose my-12">
      {rounded ? (
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <video playsInline autoPlay="autoplay" muted loop>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <video playsInline autoPlay="autoplay" muted loop>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
