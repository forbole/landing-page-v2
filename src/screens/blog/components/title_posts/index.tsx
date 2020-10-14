import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { TitlePostsCSS } from "./styles";

const TitlePosts = ({ blogs }) => {
  console.log(typeof blogs);
  return (
    <TitlePostsCSS>
      {blogs.map((x, i) => (
        <li key={i}>
          <Link href={`/blog/${x.slug}`}>
            <a>{x.title}</a>
          </Link>
        </li>
      ))}
    </TitlePostsCSS>
  );
};

TitlePosts.propTypes = {
  blogs: PropTypes.array,
};

export default TitlePosts;
