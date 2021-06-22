import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  const cmsLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <PostCSS className={classNames({ main })}>
      <div className="content">
        <Link href={"/blog/[title]"} as={`/blog/${slug}`}>
          <a>
            <div className="image-container">
              <Image
                loader={cmsLoader}
                src={featureImage}
                alt={title}
                className="image"
                layout="fill"
              />
            </div>
            <h3>{title}</h3>
            <p>{excerpt}</p>
          </a>
        </Link>
        <span>
          <p>
            Posted by
            <Link href={"/author/[author]"} as={`/author/${author.slug}`}>
              <a>{author.name}</a>
            </Link>
          </p>
          <p className="date">{publishedAt}</p>
        </span>
      </div>
    </PostCSS>
  );
};

export default Post;
