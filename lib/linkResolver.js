export const linkResolver = (doc) => {
  if (doc._meta.type === "blog_post") {
    return `/posts/${doc._meta.uid}`;
  }
  if (doc._meta.type === "page") {
    return `/${doc._meta.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc._metatype === "blog_post") {
    return "/posts/[uid]";
  }
  return "/";
};
