import React from "react";
import { useTranslation } from "i18n";
import { BDHeaderCSS } from "./styles";
import { socialMedias } from "./config";
import { Go } from "@icons";

export const BDHeader = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <BDHeaderCSS>
      <div className="wrapper">
        <h1>{t("title")}</h1>
        <h2>{t("yourCosmosExplorer")}</h2>
        <span>
          <a href="https://cosmos.bigdipper.live/">{t("visitWebsite")}</a>
          <Go />
        </span>
      </div>
      <div className="socialMedia">
        {socialMedias.map((x, i) => (
          <a href={x.url} key={i}>
            <x.component />
          </a>
        ))}
      </div>
    </BDHeaderCSS>
  );
};

export default BDHeader;
