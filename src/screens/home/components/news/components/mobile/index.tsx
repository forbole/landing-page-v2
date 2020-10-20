import React from "react";
import { BlogPostCSS } from "./styles";
import Post from "../carousel_item/news_posts";

const BlogPosts = (props: any) => {
  const { posts = [] } = props;
  return (
    <BlogPostCSS>
      {posts.slice(0, 3).map((x, i) => (
        <Post key={i} post={x} />
      ))}
    </BlogPostCSS>
  );
};

export default BlogPosts;
