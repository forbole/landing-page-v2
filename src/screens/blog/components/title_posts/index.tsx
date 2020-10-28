import React from "react";
import Link from "next/link";
import { TitlePostsCSS } from "./styles";

const TitlePosts = (props: any) => {
  const { posts } = props;
  return (
    <TitlePostsCSS>
      {posts.map((x, i) => (
        <Link href={`/blog/${x.slug}`} key={i}>
          <a>
            <li>{x.title}</li>
          </a>
        </Link>
      ))}
    </TitlePostsCSS>
  );
};

export default TitlePosts;
