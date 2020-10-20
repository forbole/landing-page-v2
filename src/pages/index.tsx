import Home from "@screens/home";
import { getPosts } from "@api/posts";
import { Post } from "@models";

const IndexPage = (props: any) => {
  return <Home {...props} />;
};

IndexPage.getInitialProps = async () => {
  const posts = await getPosts({
    limit: 6,
  });

  const formattedPosts = posts.map((post) =>
    Post.fromJson(post, { excerptLimit: 150 })
  );

  return { posts: formattedPosts };
};

export default IndexPage;
