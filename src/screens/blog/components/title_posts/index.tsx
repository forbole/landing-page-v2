import React from "react";
import Link from "next/link";
import { TitlePostsCSS } from "./styles";

const TitlePosts = (props: any) => {
  const { posts } = props;
  return (
    <TitlePostsCSS>
      {posts.map((x, i) => (
        <a href={`/blog/${x.slug}`} key={i}>
          <li>{x.title}</li>
        </a>
      ))}
    </TitlePostsCSS>
  );
};

export default TitlePosts;
