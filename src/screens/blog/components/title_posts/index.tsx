import React from "react";
import { useTranslation } from "i18n";
import Link from "next/link";
import { TitlePostsCSS } from "./styles";

const TitlePosts = (props: any) => {
  const { t } = useTranslation("blog");
  const { posts } = props;
  return (
    <TitlePostsCSS>
      <h3>{t("contents")}</h3>
      {posts.map((post, i) => (
        <Link href={"/blog/[title]"} as={`/blog/${post.slug}`} key={i}>
          <a>
            <li>{post.title}</li>
          </a>
        </Link>
      ))}
    </TitlePostsCSS>
  );
};

export default TitlePosts;
