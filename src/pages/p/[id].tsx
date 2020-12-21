import BlogDetails from "@screens/blog_details";
import { getSinglePostById } from "@api/posts";
import { Post } from "@models";
import { removeInternalTags } from "@utils/remove_internal_tags";

const BlogPreviewPage = (props: any) => {
  return <BlogDetails {...props} />;
};

BlogPreviewPage.getInitialProps = async ({ query }) => {
  const { id } = query;

  const post = await getSinglePostById(id, {
    preview: true,
  });

  if (post) {
    post.tags = removeInternalTags(post.tags);

    const formattedPost = Post.fromJson(post, {});
    return { post: formattedPost, raw: post };
  }
  return { post: null };
};

export default BlogPreviewPage;
