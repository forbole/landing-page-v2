import React from "react";
import { useTranslation } from "i18n";
import { TagsCSS, ListCSS } from "./styles";
import { fakeTags } from "./config";

const Tags = (props: any) => {
  const { t } = useTranslation("blog");

  return (
    <TagsCSS className="tags-container">
      <h3>{t("tags")}</h3>
      <ul>
        {fakeTags.map((x, i) => (
          <ListCSS key={x} index={i}>
            {x}
          </ListCSS>
        ))}
      </ul>
    </TagsCSS>
  );
};

export default Tags;
