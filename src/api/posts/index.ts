import { ghostApi as api } from "../index";
import { IPost } from "./interface";

/** Gets posts from remote */
export const getPosts = async ({ limit = 5, page = 1 }: IPost) => {
  return await api.posts
    .browse({
      include: "tags,authors",
      limit,
      page,
    })
    .catch((err) => {
      console.error(err);
    });
};

/** Gets the main feature post from remote */
export const getFeaturedPost = async () => {
  api.posts
    .browse({
      limit: 1,
      filter: "tag:fiction+tag:-fables",
      order: "created_at ASC",
    })
    .catch((err) => {
      console.error(err);
    });
};
