import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { PostCSS } from "./styles";

const Post = (props: any) => {
  const { post, main = false } = props;
  const { featureImage, title, excerpt, publishedAt, slug } = post;
  console.log(process.env.NEXT_PUBLIC_URL);
  return (
    <PostCSS className={classNames({ main })}>
      <Link href={"/blog/[title]"} as={`/blog/${slug}`}>
        <a>
          <div className="image-container">
            {/* <img src={featureImage} /> */}
            <Image
              src={featureImage}
              alt="Feature Image"
              // layout="responsive"
              className="image"
              // width={200}
              // height={100}
              layout="fill"
              //objectFit="cover"
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
