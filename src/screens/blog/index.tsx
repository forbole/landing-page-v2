import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { theme } from "@styles";
import { BlogPosts, TitlePosts, Tags } from "./components";
import { BlogCSS, MaxWidthContainerCSS, SideCSS } from "./styles";

const { colors } = theme;

const Blog = () => {
  const { t } = useTranslation("blog");
  return (
    <Layout
      title={t("title")}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
    >
      <BlogCSS>
        <MaxWidthContainerCSS>
          <BlogPosts />
          <SideCSS>
            <TitlePosts />
            <Tags />
          </SideCSS>
        </MaxWidthContainerCSS>
      </BlogCSS>
    </Layout>
  );
};

export default Blog;
