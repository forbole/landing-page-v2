import Blog from "@screens/blog";
import { getPosts } from "@api/posts";
import { Post } from "@models";
function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async () => {
  const posts = await getPosts({});
  const formattedPosts = posts.map((post) => Post.fromJson(post));

  return { posts: formattedPosts, meta: posts.meta };
};

export default BlogPage;
