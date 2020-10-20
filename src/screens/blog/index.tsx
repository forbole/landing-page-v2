import React from "react";
import { useTranslation } from "i18n";
import { Layout, Tags } from "@components";
import { theme } from "@styles";
import { BlogPosts, TitlePosts, Twitter } from "./components";
import { BlogCSS, MaxWidthContainerCSS, SideCSS } from "./styles";

const { colors } = theme;

const Blog = (props: any) => {
  const { posts, meta, tags } = props;
  const { t } = useTranslation("blog");
  return (
    <Layout
      title={t("title")}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
    >
      <BlogCSS>
        <MaxWidthContainerCSS>
          <BlogPosts main={posts[0]} blogs={posts.slice(1)} meta={meta} />
          <SideCSS>
            <TitlePosts />
            <Tags tags={tags} />
            <Twitter />
          </SideCSS>
        </MaxWidthContainerCSS>
      </BlogCSS>
    </Layout>
  );
};

export default Blog;
