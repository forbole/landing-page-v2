import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { PostCSS } from "./styles";

const Post = (props: any) => {
  const { post, main = false } = props;
  const { featureImage, title, excerpt, publishedAt, slug } = post;
  return (
    <PostCSS className={classNames({ main })}>
      <Link href={`/blog/${slug}`} as={`/blog/${slug}`}>
        <a>
          <img src={featureImage} />
          <div className="content">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <p className="date">{publishedAt}</p>
          </div>
        </a>
      </Link>
    </PostCSS>
  );
};

export default Post;
