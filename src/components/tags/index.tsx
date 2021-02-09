import React from "react";
import { useTranslation } from "i18n";
import { TagsCSS, ListCSS } from "./styles";
import Link from "next/link";

const Tags = ({ tags = [] }: any) => {
  const { t } = useTranslation("blog");
  return (
    <TagsCSS className="tags-container">
      <h3>{t("tags")}</h3>
      <ul>
        {tags.map((tag, i) => (
          <ListCSS key={tag.slug} index={i}>
            <Link href={`/tag/?tag=${tag.slug}`} as={`/tag/${tag.slug}`}>
              <a>{tag.name}</a>
            </Link>
          </ListCSS>
        ))}
      </ul>
    </TagsCSS>
  );
};

export default Tags;
