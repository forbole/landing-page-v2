import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { theme } from "@styles";
import { BlogPosts } from "./components";

const { colors } = theme;

const Blog = () => {
  const { t } = useTranslation("blog");
  return (
    <Layout
      title={t("title")}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
    >
      <div>
        <BlogPosts />
      </div>
    </Layout>
  );
};

export default Blog;
