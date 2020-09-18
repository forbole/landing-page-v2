import React from "react";
import { BlogPostCSS } from "./styles";
import Post from "./components/post";
import { dummyData } from "./config";
import { IProps } from "./interface";

const BlogPosts = ({ main, blogs }: IProps) => {
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
