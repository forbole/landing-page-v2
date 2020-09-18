import Blog from "@screens/blog";
import { getPosts } from "@api/posts";
import { Post } from "@models";
function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async ({ query }) => {
  const fetchQuery: any = {};
  if (query.page) {
    fetchQuery.page = query.page;
  }
  const posts = await getPosts(fetchQuery);
  const formattedPosts = posts.map((post) => Post.fromJson(post));

  return { posts: formattedPosts, meta: posts.meta };
};

export default BlogPage;
