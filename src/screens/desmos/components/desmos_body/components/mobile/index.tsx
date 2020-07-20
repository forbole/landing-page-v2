import React from "react";
import { useTranslation } from "i18n";
import DesmosHeader from "../desmos_header";
import Body from "../desmos_content";
import { MobileCSS, DesmosLogoCSS, HeroCSS } from "./styles";

export const Mobile = () => {
  const { t } = useTranslation("desmos");
  return (
    <MobileCSS>
      <HeroCSS>
        <DesmosHeader />
        <p>{t("visitWebsite")} &#x2192;</p>
        <DesmosLogoCSS src="images/icons/desmos_logo.svg" />
      </HeroCSS>
      <Body />
    </MobileCSS>
  );
};

export default Mobile;
