import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { PostCSS } from "./styles";

const Post = (props: any) => {
  const { post, main = false } = props;
  const { featureImage, title, excerpt, publishedAt, slug } = post;
  const cmsLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <PostCSS className={classNames({ main })}>
      <Link href={"/blog/[title]"} as={`/blog/${slug}`}>
        <a>
          <div className="image-container">
            <Image
              loader={cmsLoader}
              src={featureImage}
              alt="Feature Image"
              className="image"
              layout="fill"
            />
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
