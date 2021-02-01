import React from "react";
import Link from "next/link";
import { AuthorCSS } from "./styles";

const Author = ({ post }: any) => {
  const { primaryAuthor: author } = post;
  return (
    <AuthorCSS>
      <img src={author.profileImage} />
      <div className="content">
        <a href={`/author/${author.slug}`}>
          <p className="name">{author.name}</p>
          <p className="date">{post.publishedAt}</p>
        </a>
      </div>
    </AuthorCSS>
  );
};

export default Author;
