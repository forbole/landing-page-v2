import Network from "@src/screens/network";

const NetworkPage = () => {
  return <Network />;
};

export default NetworkPage;

// BlogDetailsPage.getInitialProps = async ({ query }) => {
//   const { title } = query;

//   const post = await getSinglePost(title);
//   post.tags = removeInternalTags(post.tags);
//   const formattedPost = Post.fromJson(post, {});
//   return { post: formattedPost };
// };

// export default BlogDetailsPage;
