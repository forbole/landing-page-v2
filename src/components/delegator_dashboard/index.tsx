import React from "react";
import { useTranslation } from "i18n";
import { DashboardContentCSS } from "./styles";
import { Button } from "semantic-ui-react";

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
        <div className="content">
          <h1>{t("forbolePortal")}</h1>
          <li>{t("fp1")}</li>
          {/* <br /> */}
          <li>{t("fp2")}</li>
          {/* <br /> */}
          <li>{t("fp3")}</li>
        </div>
      </div>
    </DashboardContentCSS>
  );
};

export default DashboardContent;
