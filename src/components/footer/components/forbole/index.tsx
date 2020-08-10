import React from "react";
import { useTranslation } from "i18n";
import { ForboleCSS } from "./styles";

const Forbole = () => {
  const { t } = useTranslation("footer");
  return (
    <ForboleCSS>
      <img
        src="/static/images/icons/forbole-logo-white.svg"
        alt="forbole footer logo"
      ></img>
      <p>{t("logoCaption")}</p>
    </ForboleCSS>
  );
};
export default Forbole;
