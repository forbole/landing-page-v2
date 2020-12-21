import { ghostApi as api } from "../index";
import { IPost } from "./interface";

/** Gets posts from remote */
export const getPosts = async ({
  limit = 5,
  page = 1,
  // filter = "tag:-[hash-zhs,hash-zht]",
  filter = "",
}: IPost) => {
  try {
    return await api.posts.browse({
      include: "tags,authors",
      limit,
      page,
      filter,
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

/** Gets the main feature post from remote */
export const getFeaturedPost = async () => {
  try {
    return await api.posts.browse({
      limit: 1,
      filter: "tag:fiction+tag:-fables",
      order: "created_at ASC",
    });
  } catch (err) {
    console.error(err);
    return null;
  }
};

/** Get single post by slug */
export const getSinglePost = async (slug: string) => {
  try {
    return await api.posts.read(
      { slug },
      {
        // formats: ["html", "plaintext"],
        include: "tags,authors",
      }
    );
  } catch (err) {
    console.error(err);
    return null;
  }
};

/** Get single post by id */
export const getSinglePostById = async (id: string) => {
  try {
    return await api.posts.read(
      { id },
      {
        // formats: ["html", "plaintext"],
        include: "tags,authors",
      }
    );
  } catch (err) {
    console.error(err);
    return null;
  }
};

/** Get all post tags */
export const getTags = async () => {
  try {
    return await api.tags.browse({ order: "slug ASC" });
  } catch (err) {
    console.error(err);
    return [];
  }
};
