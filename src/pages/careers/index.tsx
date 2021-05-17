import Careers from "@screens/careers";
import { getJobPosts } from "@api/jobs";
import { Post } from "@models";
function CareersPage(props: any) {
  return <Careers {...props} />;
}

CareersPage.getInitialProps = async ({ query }) => {
  let formattedPosts = [];
  let meta = {};
  let error = false;
  try {
    const fetchQuery: any = {};
    if (query.page) {
      fetchQuery.page = query.page;
    }

    const [posts] = await Promise.all([
      getJobPosts({
        limit: 10,
      }),
    ]);

    formattedPosts = posts.map((post) => Post.fromJson(post, {}));
    meta = posts?.meta;
  } catch (err) {
    error = true;
    console.log(error, "error");
  }

  return {
    posts: formattedPosts,
    meta,
    error,
  };
};

export default CareersPage;
