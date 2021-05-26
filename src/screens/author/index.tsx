import React, { useState, useEffect } from "react";
import { useTranslation } from "i18n";
import { Layout, BlogDetailsLoader } from "@components";
import { theme } from "@styles";
import { AuthorPosts } from "./components";
import { useBlogHook } from "./hooks";
import { membersData } from "../about/components/team/config";
import {
  TagTitlePostsCSS,
  MaxWidthContainerCSS,
  BlogCSS,
  AuthorCSS,
} from "./styles";

const AuthorTitlePosts = (props: any) => {
  const { t } = useTranslation("blog");
  const { colors } = theme;
  const { post, main = false, sidePosts = [], tags, author, meta } = props;
  const { featureImage, title, excerpt, publishedAt, slug, error } = post;
  let position = "";
  for (const i of membersData) {
    if (author.slug == i.slug) position = i.position;
  }
  useBlogHook(error, t);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (post && sidePosts.length > 0) {
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
            <TagTitlePostsCSS>
              <BlogDetailsLoader />
            </TagTitlePostsCSS>
          </MaxWidthContainerCSS>
        </BlogCSS>
      </Layout>
    );
  } else {
    return (
      <Layout
        title={post.title}
        navColor={colors.gray600}
        mobileNavColor={colors.gray600}
        description={excerpt}
        type="article"
        image={featureImage}
        keywords={tags.map((x) => x.name ?? "")}
      >
        <BlogCSS>
          <MaxWidthContainerCSS>
            <TagTitlePostsCSS>
              <AuthorCSS>
                <img src={author.profile_image} />
                <span>
                  <p className="name">{author.name}</p>
                  <p className="bio">{author.bio}</p>
                  <p className="position">{t(position)}</p>
                </span>
              </AuthorCSS>
              <AuthorPosts main={post[0]} blogs={post.slice(1)} meta={meta} />
            </TagTitlePostsCSS>
          </MaxWidthContainerCSS>
        </BlogCSS>
      </Layout>
    );
  }
};

export default AuthorTitlePosts;
