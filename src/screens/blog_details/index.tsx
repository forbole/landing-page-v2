import React from "react";
import Head from "next/head";
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
  const url = process.env.NEXT_PUBLIC_URL;
  const {
    title,
    blurb,
    date,
    modified,
    slug,
    commentCount,
    author,
    ratingCount,
    ratingAverage,
    citations,
    tags,
    excerpt,
    featureImage,
  } = post;
  console.log(post);
  const published = new Date(date);
  const copyrightYear = published.getFullYear();

  let mediaDetails, sourceUrl;

  if (featureImage) {
    sourceUrl = featureImage.sourceUrl;
  }

  // const citationsList = citations.map((citation, i) => {
  //   return `{ "@type": "CreativeWork", "citation": ${JSON.stringify(
  //     citation
  //   )} }${i === citations.length - 1 ? "" : ","}\n`;
  // });
  // const citationsText = citationsList.join("");

  const org = `{ "@id": "${slug}#organization", "type": "Organization", "name":"${title}", "logo": {
    "@type": "ImageObject",
    "name": "${title} Logo",
    "width": "230",
    "height": "67",
    "url": "${url}images/logo.png"
} }`;

  const jsonData = `{
  "@context":"https://schema.org/",
  "@type":"Article",
  "name":"${title}",
  "about": "${blurb}",
  "author": { "@type": "Person", "@id": "${url}author/${author.name}", "name": "author.name" },
  "commentCount": commentCount,
  "copyrightHolder": { "@id": "${url}#organization" },
  "copyrightYear": copyrightYear,
  "datePublished": "${date}",
  "dateModified": modified,
  "description": "${blurb}",
  "discussionUrl": "${url}articles/${slug}#comments",
  "editor": { "@id": "${url}author/${author.slug}#author" },
  "headline": "${title}",
  "inLanguage": "English",
  "mainEntityOfPage": "${url}articles/${slug}",
  "publisher": { "@id": "${url}#organization" },
  "sourceOrganization": ${org},
  "url": "${url}articles/${slug}"
    }}`;

  // console.log(org);
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
        />
      </Head>
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
