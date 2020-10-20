import React from "react";
import { AuthorCSS } from "./styles";
import { fakeBlog } from "../../config";

const Author = ({ post }: any) => {
  const { primaryAuthor: author } = post;
  return (
    <AuthorCSS>
      <img src={author.profileImage} />
      <div className="content">
        <p className="name">{author.name}</p>
        <p className="date">{post.publishedAt}</p>
      </div>
    </AuthorCSS>
  );
};

export default Author;
