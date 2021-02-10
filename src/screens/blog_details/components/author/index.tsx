import React from "react";
import Link from "next/link";
import { AuthorCSS } from "./styles";

const Author = ({ post }: any) => {
  const { primaryAuthor: author } = post;
  return (
    <AuthorCSS>
      <img src={author.profileImage} />
      <div className="content">
        <Link
          href={`/author/?author=${author.slug}`}
          as={`/author/${author.slug}`}
        >
          <a>
            <p className="name">{author.name}</p>
            <p className="date">{post.publishedAt}</p>
          </a>
        </Link>
      </div>
    </AuthorCSS>
  );
};

export default Author;
