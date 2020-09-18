import React from "react";
// import { useRouter } from 'next/router'
import { Pagination } from "semantic-ui-react";
import { BlogPostCSS, BlogContainerCSS } from "./styles";
import Post from "./components/post";
import { IProps } from "./interface";
import { useBlogPostsHook } from "./hooks";

const BlogPosts = ({ main, blogs, meta }: IProps) => {
  const {
    pagination: { page: currentPage, pages: totalPages },
  } = meta;

  const { handlePageChange } = useBlogPostsHook();

  return (
    <BlogContainerCSS>
      <BlogPostCSS>
        <Post main post={main} />
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
