import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { PostCSS } from "./styles";

const Post = (props: any) => {
  const { post, main = false } = props;
  const { image, title, excerpt, date, slug } = post;
  return (
    <PostCSS className={classNames({ main })}>
      <Link href={`/blog/${slug}`} as={`/blog/${slug}`}>
        <a>
          <img src={image} />
          <div className="content">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <p className="date">{date}</p>
          </div>
        </a>
      </Link>
    </PostCSS>
  );
};

export default Post;
