import React from "react";
import { useTranslation } from "i18n";
import {
  HeroContentCSS,
  MainContentCSS,
  HomeIconsCSS,
  NextIconCSS,
} from "./styles";
import { Secure, Trusted, Reliable, Reward } from "@icons";

export const HeroContent = () => {
  const { t } = useTranslation("home");
  return (
    <HeroContentCSS>
      <div className="wrapper">
        <MainContentCSS>
          <h1>{t("coBuildingInterchain")}</h1>
          <p>{t("homeDescription")}</p>
        </MainContentCSS>
        <HomeIconsCSS>
          <div className="icon">
            <Secure />
            {t("secure")}
          </div>
          <div className="icon">
            <Trusted />
            {t("trusted")}
          </div>
          <div className="icon">
            <Reliable />
            {t("reliable")}
          </div>
          <div className="icon">
            <Reward />
            {t("rewards")}
          </div>
        </HomeIconsCSS>
      </div>
      <NextIconCSS>
        {/* <Next /> */}
        {/* <ProgressBar /> */}
      </NextIconCSS>
    </HeroContentCSS>
  );
};

export default HeroContent;
