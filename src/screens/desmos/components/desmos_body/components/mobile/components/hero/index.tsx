import React from "react";
import { useTranslation } from "i18n";
import { HeroCSS, HeroDetailsCSS, DesmosLogoCSS } from "./styles";

const Hero = () => {
  const { t } = useTranslation("desmos");
  return (
    <HeroCSS>
      <HeroDetailsCSS>
        <h2>{t("desmos")}</h2>
        <p>{t("heroDetails")}</p>
        <p>-- Social media --</p>
        <p>{t("visitWebsite")} &#x2192;</p>
      </HeroDetailsCSS>
      <DesmosLogoCSS src="images/icons/desmos_logo.svg" />
    </HeroCSS>
  );
};

export default Hero;
