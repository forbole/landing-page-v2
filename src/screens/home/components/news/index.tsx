import React from "react";
import { NewsHeader, CarouselItem, CarouselBlogPosts } from "./components";

const News = (props: any) => {
  return (
    <>
      <NewsHeader />
      <CarouselItem {...props} />
      <CarouselBlogPosts {...props} />
    </>
  );
};

export default News;
