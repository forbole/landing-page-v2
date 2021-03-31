import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { BlockCSS } from "./styles";

const Post = (props: any) => {
  const {
    title = "",
    name = "",
    token = 0,
    percent = 0,
    main = false,
    usd = 0,
    perToken = 0,
    denom,
    delegate = process.env.NEXT_PUBLIC_URL,
  } = props;

  const { t } = useTranslation("stake_now");
  return (
    <a href={delegate} target="_blank" rel="noreferrer">
      <BlockCSS className={classNames({ main })}>
        <Link href={"/blog/[title]"} as={`/blog/${slug}`}>
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
      </BlockCSS>
    </a>
  );
};

export default Post;
