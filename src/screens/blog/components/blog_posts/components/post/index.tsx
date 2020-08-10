import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { PostCSS } from "./styles";

const Post = (props: any) => {
  const { post } = props;
  const { image, title, excerpt, main = false, date, slug } = post;

  return (
    <PostCSS className={classNames({ main })}>
      <Link href={`/blog/${slug}`}>
        <a>
          <img src={image} />
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <p className="date">{date}</p>
        </a>
      </Link>
    </PostCSS>
  );
};

export default Post;
