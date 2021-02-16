import React from "react";
import Link from "next/link";
import { TitlePostsCSS } from "./styles";

const TitlePosts = (props: any) => {
  const { posts } = props;
  return (
    <TitlePostsCSS>
      {posts.map((post, i) => (
        <Link
          href={`/blog/?blog=${post.slug}`}
          as={`/blog/${post.slug}`}
          key={i}
        >
          <a>
            <li>{post.title}</li>
          </a>
        </Link>
      ))}
    </TitlePostsCSS>
  );
};

export default TitlePosts;
