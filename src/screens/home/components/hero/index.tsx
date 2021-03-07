import React from "react";
import { useTranslation } from "i18n";
import { Button } from "semantic-ui-react";
import { HeroContentCSS, MainContentCSS, HomeButtonCSS } from "./styles";
import { Secure, Trusted, Reliable, Reward } from "@icons";

export const HeroContent = () => {
  const { t } = useTranslation("home");
  return (
    <HeroContentCSS>
      <MainContentCSS>
        <h1>{t("coBuildingInterchain")}</h1>
        <p>{t("homeDescription")}</p>
      </MainContentCSS>
      <HomeButtonCSS>
        <Button color="red">{t("aboutForbole")}</Button>
      </HomeButtonCSS>
    </HeroContentCSS>
  );
};

export default HeroContent;
