import { Date } from "prismic-reactjs";

export default function PostDate({ date }) {
  const dateFormat = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const displayDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
    Date(date)
  );

  return <time>{displayDate}</time>;
}
