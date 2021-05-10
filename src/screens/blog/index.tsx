import React, { useState, useEffect } from "react";
import { useTranslation } from "i18n";
import { Layout, Tags, TagDetailsLoader } from "@components";
import { theme } from "@styles";
import { BlogPosts, TitlePosts, Twitter } from "./components";
import { BlogCSS, MaxWidthContainerCSS, SideCSS } from "./styles";
import { useBlogHook } from "./hooks";
const { colors } = theme;

const Blog = (props: any) => {
  const { posts = [], meta = {}, tags = [], sidePosts = [], error } = props;
  const { t } = useTranslation("blog");
  useBlogHook(error, t);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (posts.length > 0 && posts[0] && sidePosts.length > 0) {
      setLoading(false);
    }
  }, [props]);
  if (isLoading) {
    return (
      <Layout
        title={t("forbole")}
        navColor={colors.gray600}
        mobileNavColor={colors.gray600}
        description={t("excerpt")}
        type="article"
        image={t("forbole")}
      >
        <BlogCSS>
          <MaxWidthContainerCSS>
            <TagDetailsLoader />
          </MaxWidthContainerCSS>
        </BlogCSS>
      </Layout>
    );
  } else {
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
              <TitlePosts posts={sidePosts} />
              <Tags tags={tags} />
              <Twitter />
            </SideCSS>
          </MaxWidthContainerCSS>
        </BlogCSS>
      </Layout>
    );
  }
};

export default Blog;
