import React from "react";
import { useTranslation } from "i18n";
import Image from "next/image";
import { Go } from "@icons";
import { BigDipperContentCSS } from "./styles";

export const BigDipperContent = () => {
  const { t } = useTranslation("products");
  return (
    <BigDipperContentCSS>
      <div className="desktopWrapper">
        <div className="img">
          <img
            src="/static/images/assets/bigdipper-ellipse.png"
            alt="Big Dipper Background"
            className="bdbg"
          ></img>
          <div className="image-container">
            <Image
              src="/static/images/assets/bigdipper-screenshot.png"
              alt="Big Dipper Screenshot"
              className="image"
              layout="fill"
            />
          </div>
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
