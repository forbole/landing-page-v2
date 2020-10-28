import React from "react";
import { useTranslation } from "i18n";
import { getSocialMediaInfo } from "@utils/social_media_info";
import { BigDipperHeaderCSS } from "./styles";
import { socialKeys } from "./config";
import { Go } from "@icons";

export const BigDipperHeader = () => {
  const { t } = useTranslation("big_dipper");
  const socialMedias = socialKeys.map((x) => getSocialMediaInfo(x));
  return (
    <BigDipperHeaderCSS>
      <div className="desktopWrapper">
        <h1>{t("title")}</h1>
        <h2>{t("yourCosmosExplorer")}</h2>
        <div className="wrapper">
          <span>
            <a
              href="https://cosmos.bigdipper.live/"
              rel="noreferrer"
              target="_blank"
            >
              {t("visitWebsite")}
            </a>
            <Go />
          </span>
          <div className="socialMedia">
            {socialMedias.map((x, i) => (
              <a href={x.url} key={i} target="_blank" rel="noreferrer">
                <x.component />
              </a>
            ))}
          </div>
        </div>
      </div>
    </BigDipperHeaderCSS>
  );
};

export default BigDipperHeader;
