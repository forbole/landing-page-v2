import React from "react";
import { useTranslation } from "i18n";
import { Go } from "@icons";
import { BigDipperContentCSS } from "./styles";

export const BigDipperContent = () => {
  const { t } = useTranslation("products");
  return (
    <BigDipperContentCSS>
      <div className="desktopWrapper">
        <div className="image">
          <img
            src="/static/images/assets/bigdipper-ellipse.png"
            alt="Big Dipper Background"
            className="bdbg"
          ></img>
          <img
            src="/static/images/assets/bigdipper-screenshot.jpg"
            alt="Big Dipper Screenshot"
            className="bd"
          ></img>
        </div>
        <div className="content">
          <h1>{t("bigDipper")}</h1>
          <li>{t("bd1")}</li>
          <li>{t("bd2")}</li>
          {/* <p className="bolded">{t("bd3")}</p> */}
          <li>{t("bd3")}</li>
          <a>
            {t("explorer")} <Go />
          </a>
        </div>
      </div>
    </BigDipperContentCSS>
  );
};

export default BigDipperContent;
