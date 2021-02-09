import React, { useState, useEffect } from "react";
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
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (props.post !== undefined) {
      setLoading(false);
    }
  }, [props]);
  console.log(props.post);
  // const {
  //   title,
  //   featureImage,
  //   excerpt,
  //   publishedAt,
  //   author,
  //   slug,
  //   error,
  // } = post;
  const { t } = useTranslation("blog");
  //useBlogHook(error, t);
  return (
    <Layout
      // title={props.post?.title}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
      // description={props.post?.excerpt}
      // type="article"
      // image={props.post?.featureImage}
      keywords={tags.map((x) => x.name ?? "")}
    >
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <BlogCSS>
          <MaxWidthContainerCSS>
            <TagPosts
              main={props.post[0]}
              blogs={props.post.slice(0)}
              meta={meta}
            />
            <SideCSS>
              <TitlePosts posts={sidePosts} />
              <Tags tags={tags} />
              <Twitter />
            </SideCSS>
          </MaxWidthContainerCSS>
        </BlogCSS>
      )}
    </Layout>
  );
};

export default TagTitlePosts;
