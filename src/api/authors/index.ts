import { ghostApi as api } from "../index";
// import { IPost } from "./interface";

/** Get blog posts by tag */
export const getAuthorBySlug = async (query: { author: string }) => {
  try {
    const authorInfo = await api.authors.read({
      slug: `${query.author}`,
    });
    return authorInfo ?? null;
  } catch (err) {
    console.error(`tag: ${err}`);
    return [];
  }
};

/** Get blog posts by author */
export const getPostsByAuthor = async (query: {
  author: string;
  page?: number;
}) => {
  try {
    const posts = await api.posts.browse({
      filter: `author:${query.author}`,
      include: "tags,authors",
      limit: 5,
      page: query?.page || 1,
      formats: "html",
    });
    return posts ?? null;
  } catch (err) {
    console.error(`tag: ${err}`);
    return [];
  }
};
