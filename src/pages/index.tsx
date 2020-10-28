import Home from "@screens/home";
import { getPosts } from "@api/posts";
import { Post } from "@models";

const IndexPage = (props: any) => {
  return <Home {...props} />;
};

IndexPage.getInitialProps = async () => {
  let formattedPosts = [];
  let error = false;
  try {
    const posts = await getPosts({
      limit: 6,
    });
    formattedPosts = posts.map((post) =>
      Post.fromJson(post, { excerptLimit: 150 })
    );
  } catch (err) {
    console.log(err);
    error = true;
  }

  return { posts: formattedPosts, error };
};

export default IndexPage;
