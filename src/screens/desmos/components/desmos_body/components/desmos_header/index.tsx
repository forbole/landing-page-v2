import React from "react";
import { useTranslation } from "i18n";
import { ContentHeaderCSS } from "./styles";
import { socialMedias } from "./config";

const ContentHeader = () => {
  const { t } = useTranslation("desmos");
  return (
    <ContentHeaderCSS>
      <h2>{t("desmos")}</h2>
      <p>{t("heroDetails")}</p>
      <div className="social-media-container">
        {socialMedias.map((x, i) => (
          <a href={x.url} key={i}>
            {x.component}
          </a>
        ))}
      </div>
    </ContentHeaderCSS>
  );
};

export default ContentHeader;
