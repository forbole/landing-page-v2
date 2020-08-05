import React from "react";
import { useTranslation } from "i18n";
import { BDHeaderCSS } from "./styles";
import { socialMedias } from "./config";

export const BDHeader = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <BDHeaderCSS>
      <h1>{t("title")}</h1>
      <h2>{t("yourCosmosExplorer")}</h2>
      <h3>{t("visitWebsite")}</h3>
      <span>
        <div className="socialMedia">
          {socialMedias.map((x, i) => (
            <a href={x.url} key={i}>
              <x.component />
            </a>
          ))}
        </div>
      </span>
    </BDHeaderCSS>
  );
};

export default BDHeader;
