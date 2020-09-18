import { ghostApi as api } from "../index";
import { IPost } from "./interface";

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
