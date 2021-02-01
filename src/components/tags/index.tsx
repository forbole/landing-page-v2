import React from "react";
import { useTranslation } from "i18n";
import { TagsCSS, ListCSS } from "./styles";
// import Link from "next/link";

const Tags = ({ tags = [] }: any) => {
  const { t } = useTranslation("blog");
  return (
    <TagsCSS className="tags-container">
      <h3>{t("tags")}</h3>
      <ul>
        {tags.map((x, i) => (
          <ListCSS key={x.slug} index={i}>
            <a href={`/tag/${x.slug}`}>{x.name}</a>
          </ListCSS>
        ))}
      </ul>
    </TagsCSS>
  );
};

export default Tags;
