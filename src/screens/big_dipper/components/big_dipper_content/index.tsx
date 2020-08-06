import React from "react";
import { useTranslation } from "i18n";
import { BDContentCSS } from "./styles";

export const BDContent = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <BDContentCSS>
      <div className="desktopWrapper">
        <div className="image">
          <img
            src="images/assets/bigdipper-screenshot.png"
            alt="Big Dipper Screenshot"
          ></img>
        </div>
        <div className="content">
          <p>{t("bd1")}</p>
          <p>{t("bd2")}</p>
          <p className="bolded">{t("bd3")}</p>
          <p>{t("bd4")}</p>
        </div>
      </div>
    </BDContentCSS>
  );
};

export default BDContent;
