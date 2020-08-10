import React from "react";
import { BlogPostCSS } from "./styles";
import Post from "./components/post";
import { dummyData } from "./config";

const { main, blogs } = dummyData;

const BlogPosts = () => {
  return (
    <BlogPostCSS>
      <Post main post={main} />
      {blogs.map((x, i) => (
        <Post key={i} post={x} />
      ))}
    </BlogPostCSS>
  );
};

export default BlogPosts;
