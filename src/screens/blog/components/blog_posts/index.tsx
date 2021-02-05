import React from "react";
import * as R from "ramda";
import { Pagination } from "semantic-ui-react";
import { BlogPostCSS, BlogContainerCSS } from "./styles";
import Post from "./components/post";
import { IProps } from "./interface";
import { useBlogPostsHook } from "./hooks";

const BlogPosts = ({ main, blogs, meta }: IProps) => {
  const currentPage = R.pathOr(0, ["pagination", "page"], meta);
  const totalPages = R.pathOr(0, ["pagination", "pages"], meta);

  const { handlePageChange } = useBlogPostsHook();

  return (
    <BlogContainerCSS>
      <BlogPostCSS>
        {!!main && <Post main post={main} />}
        {blogs.map((x, i) => (
          <Post key={i} post={x} />
        ))}
      </BlogPostCSS>
      <Pagination
        boundaryRange={0}
        activePage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </BlogContainerCSS>
  );
};

export default BlogPosts;
