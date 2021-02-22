import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { Layout, Tags, BlogDetailsLoader } from "@components";
import { theme } from "@styles";
import { TitlePosts, Twitter } from "../blog/components";
import { useBlogHook } from "./hooks";
import {
  TagTitlePostsCSS,
  MaxWidthContainerCSS,
  SideCSS,
  BlogCSS,
  AuthorCSS,
} from "./styles";

const AuthorTitlePosts = (props: any) => {
  const { colors } = theme;
  const { post, main = false, sidePosts = [], tags, author } = props;
  const { featureImage, title, excerpt, publishedAt, slug, error } = post;
  const { t } = useTranslation("blog");
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
                <div className="content">
                  <Link
                    href={`/author/?author=${author.slug}`}
                    as={`/author/${author.slug}`}
                  >
                    <a>
                      <p className="name">{author.name}</p>
                      <p className="bio">{author.bio}</p>
                    </a>
                  </Link>
                </div>
              </AuthorCSS>
              {post.map((post, i) => (
                <Link
                  href={`/blog/${post.slug}`}
                  as={`/blog/${post.slug}`}
                  key={i}
                >
                  <a>
                    <img src={post.featureImage} />
                    <div className="content">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <p className="date">{post.publishedAt}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </TagTitlePostsCSS>
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

export default AuthorTitlePosts;
