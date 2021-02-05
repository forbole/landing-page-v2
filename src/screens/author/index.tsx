import React from "react";
import { Link } from "next/link";
import { useTranslation } from "i18n";
import { Layout, Tags } from "@components";
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
                <a href={`/author/${author.slug}`}>
                  <p className="name">{author.name}</p>
                  <p className="bio">{author.bio}</p>
                </a>
              </div>
            </AuthorCSS>
            {post.map((x, i) => (
              <Link href={`/blog/${x.slug}`} key={i}>
                <a>
                  <img src={x.featureImage} />
                  <div className="content">
                    <h3>{x.title}</h3>
                    <p>{x.excerpt}</p>
                    <p className="date">{x.publishedAt}</p>
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
};

export default AuthorTitlePosts;
