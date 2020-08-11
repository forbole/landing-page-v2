import React from "react";
import { useTranslation } from "i18n";
import DOMPurify from "isomorphic-dompurify";
import { Layout, Tags } from "@components";
import { theme } from "@styles";
import { fakeBlog } from "./config";
import {
  BlogDetailsCSS,
  MaxWidthContainerCSS,
  ContentCSS,
  FlexContainerCSS,
} from "./styles";
import { Author, SocialMedia } from "./components";

const { colors } = theme;

const BlogDetails = () => {
  const { t } = useTranslation("blog");
  const sanitize = DOMPurify.sanitize;
  return (
    <Layout
      title={fakeBlog.title}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
    >
      <BlogDetailsCSS>
        <MaxWidthContainerCSS>
          <ContentCSS>
            <h3>{fakeBlog.title}</h3>
            <FlexContainerCSS>
              <SocialMedia title={fakeBlog.title} />
              <Author />
            </FlexContainerCSS>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: sanitize(fakeBlog.post) }}
            />
            <Tags />
          </ContentCSS>
        </MaxWidthContainerCSS>
      </BlogDetailsCSS>
    </Layout>
  );
};

export default BlogDetails;
