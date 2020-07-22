import React from "react";
import { useTranslation } from "i18n";
import { ForboleCSS } from "./styles";

const Forbole = () => {
  const { t } = useTranslation("footer");
  return (
    <ForboleCSS>
      <img
        src="/forbole_logo/forbole_logo_white.svg"
        alt="forbole footer logo"
      ></img>
      <p>{t("logoCaption")}</p>
    </ForboleCSS>
  );
};
export default Forbole;
