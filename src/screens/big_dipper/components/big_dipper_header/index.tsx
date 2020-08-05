import React from "react";
import { useTranslation } from "i18n";
import { BDHeaderCSS, MainContentCSS } from "./styles";
import { socialMedias } from "./config";
import { Go } from "@icons";

export const BDHeader = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <BDHeaderCSS>
      <div className="desktopWrapper">
        <h1>{t("title")}</h1>
        <h2>{t("yourCosmosExplorer")}</h2>
        <div className="wrapper">
          <span>
            <a href="https://cosmos.bigdipper.live/">{t("visitWebsite")}</a>
            <Go />
          </span>
          <div className="socialMedia">
            {socialMedias.map((x, i) => (
              <a href={x.url} key={i}>
                <x.component />
              </a>
            ))}
          </div>
        </div>
      </div>
    </BDHeaderCSS>
  );
};

export default BDHeader;
