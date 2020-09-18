import Blog from "@screens/blog";
import { getPosts } from "@api/posts";
import { Post } from "@models";
function BlogPage(props: any) {
  return <Blog {...props} />;
}

BlogPage.getInitialProps = async () => {
  let posts = await getPosts();
  posts = posts.map((post) => Post.fromJson(post));
  return { posts };
};

export default BlogPage;
