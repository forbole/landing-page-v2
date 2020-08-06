import React from "react";
import { useTranslation } from "i18n";
import { BDContentCSS } from "./styles";

export const BDContent = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <BDContentCSS>
      <img
        src="images/assets/bigdipper-screenshot.png"
        alt="Big Dipper Screenshot"
      ></img>
      <div className="content">
        <p>{t("bd1")}</p>
        <p>{t("bd2")}</p>
        <p className="bolded">{t("bd3")}</p>
        <p>{t("bd4")}</p>
      </div>
    </BDContentCSS>
  );
};

export default BDContent;
