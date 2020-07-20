import React from "react";
import { useTranslation } from "i18n";
import { HeroCSS } from "./styles";

const Hero = () => {
  const { t } = useTranslation("desmos");
  return (
    <HeroCSS>
      <h2>{t("desmos")}</h2>
      <p>{t("heroDetails")}</p>
      <p>-- Social media --</p>
      <p>{t("visitWebsite")} &#x2192;</p>
    </HeroCSS>
  );
};

export default Hero;
