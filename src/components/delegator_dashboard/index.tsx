import React from "react";
import { useTranslation } from "i18n";
import { DashboardContentCSS } from "./styles";

export const DashboardContent = () => {
  const { t } = useTranslation("products");
  return (
    <DashboardContentCSS>
      <div className="desktopWrapper">
        <div className="image">
          <img
            src="/static/images/assets/forbole-portal-screenshot.png"
            alt="Forbole Portal Screenshot"
          ></img>
        </div>
        <img
          src="/static/images/assets/portal-ellipse.png"
          alt="Portal ellipse"
          className="pbg"
        ></img>
        <ul className="content">
          <h1>{t("forbolePortal")}</h1>
          <li>{t("fp1")}</li>
          <li>{t("fp2")}</li>
          <li>{t("fp3")}</li>
        </ul>
      </div>
    </DashboardContentCSS>
  );
};

export default DashboardContent;
