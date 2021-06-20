import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "@/lib/linkResolver";

export default function SliceContent({ data }) {
  const slices = data.body.map(function (slice, index) {
    if (slice.slice_type === "rich_text") {
      return (
        <div
          key={index}
          className="prose prose-lg sm:prose-xl md:prose-2xl mt-12 lg:mt-24 xl:mt-32 container mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl lg:px-16"
        >
          {RichText.render(slice.primary.text, linkResolver)}
        </div>
      );
    } else if (slice.slice_type === "blockquote") {
      return (
        <div
          key={index}
          className="prose prose-md md:prose-lg lg:prose-xl xl:prose-2xl my-12 lg:my-24 container mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl lg:px-16"
        >
          <blockquote className="blockquote opacity-75">
            {RichText.render(slice.primary.quote, linkResolver)}
            {slice.primary.citation && <cite>{slice.primary.citation}</cite>}
          </blockquote>
        </div>
      );
    } else if (slice.slice_type === "image") {
      return (
        <div key={index} className="container mx-auto">
          <figure className="mt-16 md:mt-24 lg:mt-32">
            <Image
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              width={slice.primary.image_width}
              height={slice.primary.image_height}
            />
            <figcaption className="text-gray-600 mt-4">
              {slice.primary.caption}
            </figcaption>
          </figure>
        </div>
      );
    } else if (slice.slice_type === "hr") {
      return (
        <div
          key={index}
          className="container mx-auto mt-16 md:mt-24 lg:mt-32 max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <hr />
        </div>
      );
    } else if (slice.slice_type === "video_embed") {
      return (
        <div
          key={index}
          className="container mx-auto mt-16 md:mt-24 lg:mt-32 max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <div className="relative h-0 aspect-16x9">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${slice.primary.video_id}`}
              title="YouTube video embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      );
    } else {
      return "There is no slice content to display.";
    }
  });

  return <div className="blog-content">{slices}</div>;
}
