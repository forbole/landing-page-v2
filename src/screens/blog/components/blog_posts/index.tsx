import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
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
  const [limit, setLimit] = useState(11);
  let lastPost = limit - 2;
  console.log(`first render`, lastPost, limit);
  const lastPostRef = useRef(null);
  // console.log(blogs);
  // console.log(`reffffff`, postPos);

  const seeMorePages = (e: any, { limit }: any) => {
    limit + 11 >= totalPosts ? setLimit(totalPosts) : setLimit(limit + 11);
    // const elmnt = postPos.current.length - 1;
    // console.group(`hiiiiiii`, elmnt, document.querySelector(`[id=${elmnt}]`));
    //elmnt.scrollIntoView();
    //console.log(`inside function posts arrayyyy`, postPos);
    // ref.current.click();
    // postPos.current
    //lastPost = limit - 2;
    console.log(`newwwwww`, lastPost, limit);
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

  useEffect(() => {
    console.log(`last ref element`, lastPostRef);
    if (lastPostRef.current) {
      lastPostRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [lastPost]);

  const { handlePageChange } = useBlogPostsHook();

  return (
    <BlogContainerCSS>
      <BlogPostCSS>
        {!!main && <Post main post={main} />}
        {blogs.map((post, i, array) => (
          <>
            {console.log(`checkkkk`, i, lastPost, post, array)}
            <div>
              <Post
                key={i}
                id={i}
                //ref={i == lastPost ? lastPostRef : null}
                className={classNames({ lastPost: i == lastPost })}
                post={post}
              />
            </div>
            {console.log(`after checkkk`, i, lastPostRef, post, array)}
          </>
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
        <Button content="See More" onClick={seeMorePages} limit={limit} />
      )}
    </BlogContainerCSS>
  );
};

export default BlogPosts;
