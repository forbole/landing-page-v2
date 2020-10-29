import React from "react";
import { useTranslation } from "i18n";
import { DashboardContentCSS } from "./styles";
import { Button } from "semantic-ui-react";

export const DashboardContent = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <DashboardContentCSS>
      <div className="desktopWrapper">
        <div className="image">
          <img
            src="/static/images/assets/dashboard-screenshot.png"
            alt="Big Dipper Screenshot"
          ></img>
        </div>
        <div className="content">
          <h3>{t("bdWallet")}</h3>
          <h2>{t("bdWalletDescription")}</h2>
          <p>
            {t("dd1")}
            <br />
            {t("dd2")}
            <br />
            {t("dd3")}
          </p>
          <Button color="black">
            <a href="#">{t("download")}</a>
          </Button>
        </div>
      </div>
    </DashboardContentCSS>
  );
};

export default DashboardContent;
