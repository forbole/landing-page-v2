import React from "react";
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
} from "./styles";

const TagTitlePosts = (props: any) => {
  const { colors } = theme;
  const { post, main = false, sidePosts = [], tags } = props;
  const {
    featureImage,
    title,
    excerpt,
    publishedAt,
    author,
    slug,
    error,
  } = post;
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
            {post.map((x, i) => (
              <a href={`/blog/${x.slug}`} key={i}>
                <img src={x.featureImage} />
                <div className="content">
                  <span>
                    <img src={x.author.profileImage} />
                    <h4>
                      {x.author.name} in {x.tags && x.tags[0] && x.tags[0].name}
                    </h4>
                  </span>
                  <h3>{x.title}</h3>
                  <p>{x.excerpt}</p>
                  <p className="date">{x.publishedAt}</p>
                </div>
              </a>
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

export default TagTitlePosts;
