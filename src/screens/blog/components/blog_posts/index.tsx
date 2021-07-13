import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouterScroll } from "@moxy/next-router-scroll";
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
  const [limit, setLimit] = useState(15);
  //let limit = 0;
  const [lastView, setLastView] = useState(0);
  //let lastPost = blogs.length - 1;
  //console.log(`first render`, blogs[blogs.length - 1].id, lastPost);
  console.log(`meta`, meta);
  const lastPostRef = useRef(null);
  console.log(`lengthhhhhh`, blogs.length);
  // console.log(`reffffff`, postPos);
  const { updateScroll } = useRouterScroll();
  console.log(`hiiiiiii`, updateScroll);
  const divRef = useCallback(
    (node) => {
      if (node) {
        console.log(`node`, node);
        // console.log(updateScroll);
        // updateScroll();
        node.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
      return node;
    },
    [updateScroll]
  );

  useEffect(() => {
    updateScroll();
    //console.log(`hiiiiiii b`, registerElement);
  }, [divRef]);

  const seeMorePages = (e: any, { limit, posts }: any) => {
    console.log(`post check`, posts);
    limit + 15 >= totalPosts ? setLimit(totalPosts) : setLimit(limit + 15);
    //console.log(`last view`, lastView);
    //const lastPost = limit - 11;
    setLastView(posts);
    // const elmnt = postPos.current.length - 1;
    // console.group(`hiiiiiii`, elmnt, document.querySelector(`[id=${elmnt}]`));
    //elmnt.scrollIntoView();
    //console.log(`inside function posts arrayyyy`, postPos);
    // ref.current.click();
    // postPos.current
    //lastPost = limit;
    //setLastPost(blogs.length - 1);
    console.log(`newwwwww`, lastView, limit);
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

  // useEffect(() => {
  //   console.log(`last ref element`, lastPostRef.current);
  //   if (lastPostRef.current) {
  //     lastPostRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //       inline: "nearest",
  //     });
  //   }
  // }, [lastPostRef]);

  const { handlePageChange } = useBlogPostsHook();

  return (
    <BlogContainerCSS>
      <BlogPostCSS>
        {!!main && <Post main post={main} />}
        {blogs.map((post, i) => (
          <>
            {console.log(`checkkkk`, i, lastView)}
            <Post
              key={i}
              id={i}
              refProp={i == lastView ? divRef : null}
              className={classNames({ lastPost: i == blogs.length - 4 })}
              post={post}
            />
            {/* {console.log(`after checkkk`, i, lastPostRef, post, array)} */}
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
