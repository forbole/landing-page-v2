import Blog from "@screens/blog";
import { getPosts, getTags } from "@api/posts";
import { Post, Tag, CosmosBlogs } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";

function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async ({ query }) => {
  const fetchQuery: any = {};
  if (query.page) {
    fetchQuery.page = query.page;
  }
  const [tags, posts] = await Promise.all([getTags(), getPosts(fetchQuery)]);
  const formattedPosts = posts.map((post) => Post.fromJson(post, {}));
  const formattedTags = removeInternalTags(tags).map((tag) =>
    Tag.fromJson(tag)
  );
  // console.log(tags);
  const cosmosRes = await fetch("https://forum.cosmos.network/posts.json").then(
    function (response) {
      return response.json();
    }
  );
  const cosmosPosts = cosmosRes["latest_posts"].slice(0, 10);
  const formattedCosmosPosts = cosmosPosts.map((cosmosPost) => {
    return CosmosBlogs.fromJson(cosmosPost);
  });

  //console.log(formattedCosmosPosts)
  return {
    posts: formattedPosts,
    meta: posts.meta,
    tags: formattedTags,
    cosmosPosts: formattedCosmosPosts,
  };
};

export default BlogPage;
