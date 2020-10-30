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
          <div className="image-container">
            <img src={featureImage} />
          </div>
          <div className="content">
            <div>
              <h3>{title}</h3>
              <p>{excerpt}</p>
            </div>
            <p className="date">{publishedAt}</p>
          </div>
        </a>
      </Link>
    </PostCSS>
  );
};

export default Post;
