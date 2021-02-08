import React from "react";
import { useTranslation } from "i18n";
import { Layout, Tags } from "@components";
import { theme } from "@styles";
import { TitlePosts, Twitter } from "../blog/components";
import { TagPosts } from "./components";
import { useBlogHook } from "./hooks";
import { MaxWidthContainerCSS, SideCSS, BlogCSS } from "./styles";

const TagTitlePosts = (props: any) => {
  const { colors } = theme;
  const { post, main = false, sidePosts = [], tags = [], meta = {} } = props;
  const {
    title,
    featureImage,
    excerpt,
    publishedAt,
    author,
    slug,
    error,
  } = post;
  const { t } = useTranslation("blog");
  useBlogHook(error, t);
  return (
    <Layout
      title={post?.title}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
      description={post?.excerpt}
      type="article"
      image={post?.featureImage}
      keywords={tags.map((x) => x.name ?? "")}
    >
      <BlogCSS>
        <MaxWidthContainerCSS>
          <TagPosts main={post[0]} blogs={post.slice(0)} meta={meta} />
          <SideCSS>
            <TitlePosts posts={sidePosts} />
            <Tags tags={tags} />
            <Twitter />
          </SideCSS>
        </MaxWidthContainerCSS>
      </BlogCSS>
    </Layout>
  );
};

export default TagTitlePosts;
