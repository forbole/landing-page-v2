import React from "react";
import { useTranslation } from "i18n";
import { Go, BDScreenshot } from "@icons";
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
          <BDScreenshot className="bd" />
        </div>
        <div className="content">
          <ul>
            <h1>{t("bigDipper")}</h1>
            <li>{t("bd1")}</li>
            <li>{t("bd2")}</li>
            <li>{t("bd3")}</li>
          </ul>
          <a href="https://bigdipper.live/">
            {t("explorer")} <Go />
          </a>
        </div>
      </div>
    </BigDipperContentCSS>
  );
};

export default BigDipperContent;
