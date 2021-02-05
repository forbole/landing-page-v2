import React from "react";
import * as R from "ramda";
import { Pagination } from "semantic-ui-react";
import { BlogPostCSS, BlogContainerCSS } from "./styles";
import Post from "./components/post";
import { IProps } from "./interface";
import { useBlogPostsHook } from "./hooks";

const TagPosts = ({ main, blogs, meta }: IProps) => {
  const currentPage = R.pathOr(0, ["pagination", "page"], meta);
  const totalPages = R.pathOr(0, ["pagination", "pages"], meta);

  console.log(currentPage, totalPages, meta.pagination);

  const { handleTagPageChange } = useBlogPostsHook();

  return (
    <BlogContainerCSS>
      <BlogPostCSS>
        {!!main && <Post main post={main} />}
        {blogs.map((x, i) => (
          <Post key={i} post={x} />
        ))}
      </BlogPostCSS>
      {/* <Link href="/tag/[tag]" as={"/blog/" + value[0]}></Link> */}
      <Pagination
        boundaryRange={0}
        activePage={currentPage}
        totalPages={totalPages}
        onPageChange={handleTagPageChange}
      />
    </BlogContainerCSS>
  );
};

export default TagPosts;
