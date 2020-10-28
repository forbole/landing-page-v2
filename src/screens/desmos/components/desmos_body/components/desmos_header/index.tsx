import React from "react";
import { useTranslation } from "i18n";
import { ContentHeaderCSS } from "./styles";
import { socialKeys } from "./config";
import { getSocialMediaInfo } from "@utils/social_media_info";

const ContentHeader = () => {
  const { t } = useTranslation("desmos");
  const socialMedias = socialKeys.map((x) => getSocialMediaInfo(x));
  return (
    <ContentHeaderCSS>
      <h2>{t("desmos")}</h2>
      <p>{t("heroDetails")}</p>
      <div className="social-media-container">
        {socialMedias.map((x, i) => (
          <a href={x.url} key={i} target="_blank" rel="noreferrer">
            <x.component />
          </a>
        ))}
      </div>
    </ContentHeaderCSS>
  );
};

export default ContentHeader;
