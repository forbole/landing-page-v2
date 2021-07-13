import Blog from "@screens/blog";
import { getPosts, getAllPosts, getTags } from "@api/posts";
import { Post, Tag } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";
function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async ({ query }) => {
  let formattedPosts = [];
  let formattedSidePosts = [];
  let formattedTags = [];
  let meta = {};
  let error = false;
  try {
    const fetchQuery: any = {};
    let posts: any = [];
    if (query.page) {
      fetchQuery.page = query.page;
      posts = await getPosts(fetchQuery);
    } else if (query.limit) {
      fetchQuery.limit = query.limit;
      posts = await getAllPosts(fetchQuery);
    } else {
      posts = await getPosts(fetchQuery);
    }

    const [tags, sidePosts] = await Promise.all([
      getTags(),
      getPosts({
        limit: 10,
      }),
    ]);

    formattedPosts = posts.map((post) => Post.fromJson(post, {}));
    formattedSidePosts = sidePosts.map((post) => Post.fromJson(post, {}));
    formattedTags = removeInternalTags(tags).map((tag) => Tag.fromJson(tag));
    meta = posts.meta;
  } catch (err) {
    error = true;
    console.log(error, "error");
  }

  return {
    posts: formattedPosts,
    tags: formattedTags,
    sidePosts: formattedSidePosts,
    meta,
    error,
  };
};

export default BlogPage;
