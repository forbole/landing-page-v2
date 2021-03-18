import React from "react";
import { useTranslation } from "i18n";
import { DesmosContentCSS } from "./styles";
import { Go } from "@icons";

export const DesmosContent = () => {
  const { t } = useTranslation("products");
  return (
    <DesmosContentCSS>
      <div className="desktopWrapper">
        <div className="image">
          <img
            src="/static/images/assets/desmos-image.png"
            alt="Forbole Portal Screenshot"
          ></img>
        </div>
        <div className="content">
          <ul>
            <h1>{t("desmos")}</h1>
            <li>{t("dd1")}</li>
            <li>{t("dd2")}</li>
            <li>{t("dd3")}</li>
          </ul>
          <a href="https://www.desmos.network/">
            {t("explorer")} <Go />
          </a>
        </div>
      </div>
    </DesmosContentCSS>
  );
};

export default DesmosContent;
