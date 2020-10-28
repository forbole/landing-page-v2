import Blog from "@screens/blog";
import { getPosts, getTags } from "@api/posts";
import { Post, Tag } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";
function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async ({ query }) => {
  const fetchQuery: any = {};
  if (query.page) {
    fetchQuery.page = query.page;
  }

  const [tags, posts, sidePosts] = await Promise.all([
    getTags(),
    getPosts(fetchQuery),
    getPosts({
      limit: 10,
    }),
  ]);

  const formattedPosts = posts.map((post) => Post.fromJson(post, {}));
  const formattedSidePosts = sidePosts.map((post) => Post.fromJson(post, {}));
  const formattedTags = removeInternalTags(tags).map((tag) =>
    Tag.fromJson(tag)
  );

  return {
    posts: formattedPosts,
    meta: posts.meta,
    tags: formattedTags,
    sidePosts: formattedSidePosts,
  };
};

export default BlogPage;
