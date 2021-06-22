import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthorCSS } from "./styles";

const cmsLoader = ({ src }) => {
  return `${src}`;
};

const Author = ({ post }: any) => {
  const { primaryAuthor: author } = post;
  return (
    <AuthorCSS>
      <div className="image-container">
        <Image
          loader={cmsLoader}
          src={author.profileImage}
          alt={author.name}
          className="image"
          layout="fill"
        />
      </div>
      <div className="content">
        <Link
          key={post.id}
          href={"/author/[author]"}
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
