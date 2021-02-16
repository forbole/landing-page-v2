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
    post,
    main = false,
    sidePosts = [],
    tags = [],
    meta = {},
    error,
  } = props;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (props.post !== undefined) {
      setLoading(false);
    }
  }, [props]);
  const { t } = useTranslation("blog");
  useBlogHook(error, t);
  return (
    <>
      {isLoading ? (
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
      ) : (
        <Layout
          title={props.post.title}
          navColor={colors.gray600}
          mobileNavColor={colors.gray600}
          description={props.post.excerpt}
          type="article"
          image={props.post.featureImage}
          keywords={tags.map((x) => x.name ?? "")}
        >
          <BlogCSS>
            <MaxWidthContainerCSS>
              <TagPosts
                main={props.post[0]}
                blogs={props.post.slice(1)}
                meta={meta}
              />
              <SideCSS>
                <TitlePosts posts={sidePosts} />
                <Tags tags={tags} />
                <Twitter />
              </SideCSS>
            </MaxWidthContainerCSS>
          </BlogCSS>
        </Layout>
      )}
    </>
  );
};

export default TagTitlePosts;
