import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import { PostCSS } from "./styles";

const cmsLoader = ({ src }) => {
  return `${src}`;
};

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
      <div className="content">
        <Link href={"/blog/[title]"} as={`/blog/${slug}`}>
          <a>
            <div className="image-container">
              <Image
                loader={cmsLoader}
                src={
                  featureImage == null
                    ? "/static/images/assets/blog-placeholder.png"
                    : featureImage
                }
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
