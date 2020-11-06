import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { Layout, Tags } from "@components";
import { theme } from "@styles";
import {
  BlogDetailsCSS,
  MaxWidthContainerCSS,
  ContentCSS,
  FlexContainerCSS,
  GhostCSS,
} from "./styles";
import { Author, SocialMedia } from "./components";

const { colors } = theme;

const BlogDetails = ({ post, raw }: any) => {
  const { tags, excerpt, featureImage } = post;
  const sanitize = DOMPurify.sanitize;
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
      <BlogDetailsCSS>
        <MaxWidthContainerCSS>
          <ContentCSS>
            <h3>{post.title}</h3>
            <FlexContainerCSS>
              <SocialMedia title={post.title} />
              <Author post={post} />
            </FlexContainerCSS>
            <img className="cover-image" src={post.featureImage} />
            <GhostCSS
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: sanitize(post.html) }}
            />
            {!!tags.length && <Tags tags={tags} />}
          </ContentCSS>
        </MaxWidthContainerCSS>
      </BlogDetailsCSS>
    </Layout>
  );
};

export default BlogDetails;
