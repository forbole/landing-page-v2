import React from "react";
import { BlogPostCSS } from "./styles";
import NetworkBlock from "../carousel_item/network_block";

const BlogPosts = (props: any) => {
  const { posts = [] } = props;
  return (
    <BlogPostCSS>
      {posts.slice(0, 3).map((x, i) => (
        <NetworkBlock key={i} post={x} />
      ))}
    </BlogPostCSS>
  );
};

export default BlogPosts;
