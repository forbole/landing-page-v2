import React from "react";
import { useTranslation } from "i18n";
import { ContentHeaderCSS } from "./styles";

const ContentHeader = () => {
  const { t } = useTranslation("desmos");
  return (
    <ContentHeaderCSS>
      <h2>{t("desmos")}</h2>
      <p>{t("heroDetails")}</p>
      <p>-- Social media --</p>
    </ContentHeaderCSS>
  );
};

export default ContentHeader;
