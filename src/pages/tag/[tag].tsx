import TagTitlePosts from "@screens/tag";
import { getPostsByTag } from "@api/tags";
import { getPosts, getTags } from "@api/posts";
import { Post, Tag } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";
// import { useRouter } from "next/router";

const TagDetailsPage = (props: any) => {
  return <TagTitlePosts {...props} />;
};

TagDetailsPage.getInitialProps = async ({ query }) => {
  let formattedPost: any = [];
  let formattedSidePosts = [];
  let formattedTags = [];
  let meta = {};
  let error = false;
  try {
    const fetchQuery: any = {};
    if (query.page) {
      fetchQuery.page = query.page;
    }
    if (query.tag) {
      fetchQuery.tag = query.tag;
    }
    const [tags, posts, sidePosts] = await Promise.all([
      getTags(),
      getPostsByTag(fetchQuery),
      getPosts({
        limit: 10,
      }),
    ]);
    formattedSidePosts = sidePosts.map((post) => Post.fromJson(post, {}));
    formattedTags = removeInternalTags(tags).map((tag) => Tag.fromJson(tag));
    meta = posts?.meta;
    // const formattedPosts = posts.map((post) => Post.fromJson(post, {}));
    // formattedPosts.tags = posts.map((x) => removeInternalTags(x.tags));
    formattedPost = posts.map((y) => Post.fromJson(y, {}));
    formattedPost.tags = posts.map((x) => removeInternalTags(x.tags));
  } catch (err) {
    error = true;
    console.log(error, "error");
  }

  return {
    post: formattedPost,
    tags: formattedTags,
    sidePosts: formattedSidePosts,
    meta,
    error,
  };
};

export default TagDetailsPage;
