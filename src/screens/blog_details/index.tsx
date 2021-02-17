import React, { useState, useEffect } from "react";
import { useTranslation } from "i18n";
import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";
import { Layout, Tags, BlogDetailsLoader } from "@components";
import { theme } from "@styles";
import Custom404 from "@screens/404";
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
  if (!post) {
    return <Custom404 />;
  }
  const url = process.env.NEXT_PUBLIC_URL;
  const {
    title,
    publishedAt,
    modified,
    slug,
    author,
    tags,
    excerpt,
    featureImage,
    html,
  } = post;

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (excerpt && featureImage && html) {
      setLoading(false);
    }
  }, [post]);

  const { t } = useTranslation("blog");
  const sanitize = DOMPurify.sanitize;
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
        <BlogDetailsCSS>
          <MaxWidthContainerCSS>
            <BlogDetailsLoader />
          </MaxWidthContainerCSS>
        </BlogDetailsCSS>
      </Layout>
    );
  } else {
    const org = {
      "@id": `${slug}#organization`,
      type: "Organization",
      name: `Forbole`,
      logo: {
        "@type": "ImageObject",
        name: `${title} Logo`,
        width: "230",
        height: "67",
        url: `${featureImage}`,
      },
    };

    const jsonData = {
      "@context": "https://schema.org/",
      "@type": "Article",
      publisher: org,
      author: {
        "@type": "Person",
        "@id": `${url}/author/${author.name}`,
        name: author.name,
      },
      headline: `${title}`,
      url: `${url}`,
      datePublished: `${publishedAt}`,
      dateModified: modified,
      description: `${excerpt}`,
      discussionUrl: `${url}/blog/${slug}#comments`,
      inLanguage: "English",
      sourceOrganization: {
        "@id": `${slug}#organisation`,
        type: "Organization",
        name: `${title}`,
        logo: {
          "@type": "ImageObject",
          name: `${title} Logo`,
          width: "230",
          height: "67",
          url: `${url}/images/logo.png`,
        },
      },
      mainEntityOfPage: `${url}/blog/${slug}`,
    };
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
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({ jsonData }, null, 2),
            }}
          />
        </Head>
        <BlogDetailsCSS>
          <MaxWidthContainerCSS>
            <ContentCSS>
              <h4>{!!tags.length && post.tags[0].name}</h4>
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
  }
};

export default BlogDetails;
