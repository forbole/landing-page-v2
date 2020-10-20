import BlogDetails from "@screens/blog_details";
import { getSinglePost } from "@api/posts";
import { Post } from "@models";

const BlogDetailsPage = (props: any) => {
  return <BlogDetails {...props} />;
};

BlogDetailsPage.getInitialProps = async ({ query }) => {
  const { title } = query;

  const post = await getSinglePost(title);
  const formattedPost = Post.fromJson(post);
  return { post: formattedPost };
};

export default BlogDetailsPage;
