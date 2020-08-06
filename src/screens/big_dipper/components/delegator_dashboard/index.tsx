import React from "react";
import { useTranslation } from "i18n";
import { DDContentCSS } from "./styles";
import { Button } from "semantic-ui-react";

export const DDContent = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <DDContentCSS>
      <div className="desktopWrapper">
        <div className="image">
          <img
            src="images/assets/dashboard-screenshot.png"
            alt="Big Dipper Screenshot"
          ></img>
        </div>
        <div className="content">
          <h3>{t("delegatorDashboard")}</h3>
          <h2>{t("telescope")}</h2>
          <p>{t("dd1")}</p>
          <p>{t("dd2")}</p>
          <p>{t("dd3")}</p>
          <Button color="black">{t("download")}</Button>
        </div>
      </div>
    </DDContentCSS>
  );
};

export default DDContent;
