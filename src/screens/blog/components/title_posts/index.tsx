import React from "react";
import Link from "next/link";
import { fakeTitles } from "./config";
import { TitlePostsCSS } from "./styles";

const TitlePosts = () => {
  return (
    <TitlePostsCSS>
      {fakeTitles.map((x, i) => (
        <li key={i}>
          <Link href={`/blog/${x.slug}`}>
            <a>{x.title}</a>
          </Link>
        </li>
      ))}
    </TitlePostsCSS>
  );
};

export default TitlePosts;
