import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import * as R from "ramda";
import { Button, Pagination } from "semantic-ui-react";
import useWindowSize from "@utils/get_screen_size";
import { BlogPostCSS, BlogContainerCSS } from "./styles";
import Post from "./components/post";
import { IProps } from "./interface";
import { useBlogPostsHook } from "./hooks";

const BlogPosts = ({ main, blogs, meta }: IProps) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const currentPage = R.pathOr(0, ["pagination", "page"], meta);
  const totalPages = R.pathOr(0, ["pagination", "pages"], meta);
  const totalPosts = R.pathOr(0, ["pagination", "total"], meta);
  const [limit, setLimit] = useState(15);
  const [lastView, setLastView] = useState(0);
  const divRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
    return node;
  }, []);

  const seeMorePages = (e: any, { limit, posts }: any) => {
    limit + 15 >= totalPosts ? setLimit(totalPosts) : setLimit(limit + 15);
    setLastView(posts);
    router.push({
      pathname: router.pathname,
      query: { limit: limit },
    });
  };
  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
    },
    tablet: {
      breakpoint: { max: 1100, min: 464 },
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
    },
  };

  const { handlePageChange } = useBlogPostsHook();

  return (
    <BlogContainerCSS>
      <BlogPostCSS>
        {!!main && <Post main post={main} />}
        {blogs.map((post, i) => (
          <Post
            key={i}
            id={i}
            refProp={i == lastView ? divRef : null}
            post={post}
          />
        ))}
      </BlogPostCSS>
      {width >= responsive.mobile.breakpoint.max ? (
        <Pagination
          boundaryRange={0}
          activePage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : (
        <Button
          content="See More"
          onClick={seeMorePages}
          limit={limit}
          posts={blogs.length}
        />
      )}
    </BlogContainerCSS>
  );
};

export default BlogPosts;
