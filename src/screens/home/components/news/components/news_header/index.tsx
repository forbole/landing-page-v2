import React from "react";
import { useTranslation } from "i18n";
import { NewsHeaderCSS } from "./styles";

const NewsHeader = () => {
  const { t } = useTranslation("home");
  return (
    <NewsHeaderCSS>
      <div className="desktopWrapper">
        <h2>{t("whatsNews")}</h2>
        <p>{t("newsDescription")}</p>
      </div>
    </NewsHeaderCSS>
  );
};

export default NewsHeader;
