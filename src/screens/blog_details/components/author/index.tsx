import React from "react";
import { AuthorCSS } from "./styles";
import { fakeBlog } from "../../config";
const Author = () => {
  return (
    <AuthorCSS>
      <img src={fakeBlog.author.image} />
      <div className="content">
        <p className="name">{fakeBlog.author.name}</p>
        <p className="date">{fakeBlog.date}</p>
      </div>
    </AuthorCSS>
  );
};

export default Author;
