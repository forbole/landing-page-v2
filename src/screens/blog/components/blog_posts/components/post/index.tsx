import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { PostCSS } from "./styles";

const Post = (props: any) => {
  const { post, main = false } = props;
  const {
    featureImage,
    title,
    excerpt,
    publishedAt,
    slug,
    author,
    tags,
  } = post;
  return (
    <PostCSS className={classNames({ main })}>
      <Link href={`/blog/?blog=${slug}`} as={`/blog/${slug}`}>
        <a>
          <img src={featureImage} />
          <div className="content">
            <span>
              <img src={author.profileImage} />
              <h4>
                {author.name} in{" "}
                {post.tags && post.tags[0] && post.tags[0].name}
              </h4>
            </span>
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
