// import React from "react";
// import { CarouselBlockCSS, WrapperCSS } from "./styles";
// import Carousel from "react-multi-carousel";
import React from "react";
import { BlogPostCSS } from "./styles";
import Post from "../carousel_item/news_posts";
import { dummyData } from "../carousel_item/config";

const { main, blogs } = dummyData;

const BlogPosts = () => {
  return (
    <BlogPostCSS>
      <Post main post={main} />
      {blogs.slice(0, 2).map((x, i) => (
        <Post key={i} post={x} />
      ))}
    </BlogPostCSS>
  );
};

export default BlogPosts;
