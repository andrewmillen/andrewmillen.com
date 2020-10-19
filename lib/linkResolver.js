export const linkResolver = (doc) => {
  if (doc._meta.type === "blog_post") {
    return `/posts/${doc._meta.uid}`;
  }
  if (doc._meta.type === "page") {
    return `/${doc._meta.uid}`;
  }
  return "/";
};
