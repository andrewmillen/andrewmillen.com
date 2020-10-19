export const linkResolver = (doc) => {
  if (doc._meta.type === "blog_post") {
    return `/posts/${doc._meta.uid}`;
  }
  return "/";
};

export const hrefResolver = (doc) => {
  if (doc._meta.type === "blog_post") {
    return "/posts/[uid]";
  }
  return "/";
};
