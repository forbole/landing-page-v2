import React, { useState, useEffect } from "react";
import { useTranslation } from "i18n";
import { Layout, Tags, TagDetailsLoader } from "@components";
import { theme } from "@styles";
import { TitlePosts, Twitter } from "../blog/components";
import { TagPosts } from "./components";
import { useBlogHook } from "./hooks";
import { MaxWidthContainerCSS, SideCSS, BlogCSS } from "./styles";

const TagTitlePosts = (props: any) => {
  const { colors } = theme;
  const {
    main = false,
    post = [],
    sidePosts = [],
    tags = [],
    meta = {},
    error,
  } = props;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (post.length > 0 && sidePosts.length > 0) {
      setLoading(false);
    }
    post.map((x) => {
      if (x.featureImage == null)
        x.featureImage = "/static/images/assets/blog-placeholder.png";
    });
  }, [props]);
  const { t } = useTranslation("blog");
  useBlogHook(error, t);
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
        title={t("forbole")}
        navColor={colors.gray600}
        mobileNavColor={colors.gray600}
        description={t("excerpt")}
        type="article"
        image={t("forbole")}
      >
        <BlogCSS>
          <MaxWidthContainerCSS>
            <TagPosts main={post[0]} blogs={post.slice(1)} meta={meta} />
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

export default TagTitlePosts;
