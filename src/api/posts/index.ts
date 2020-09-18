import { ghostApi as api } from "../index";

export const getPosts = async () => {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
};
