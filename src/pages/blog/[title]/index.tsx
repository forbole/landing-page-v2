import BlogDetails from "@screens/blog_details";
import { getSinglePost } from "@api/posts";
import { Post } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";

const BlogDetailsPage = (props: any) => {
  return <BlogDetails {...props} />;
};

BlogDetailsPage.getInitialProps = async ({ query }) => {
  const { title } = query;

  const post = await getSinglePost(title);
  if (post) {
    post.tags = removeInternalTags(post.tags);

    const formattedPost = Post.fromJson(post);

    return { post: formattedPost };
  } else {
    return { post: null };
  }
};

export default BlogDetailsPage;
