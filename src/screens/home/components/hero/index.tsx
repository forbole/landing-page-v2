import React from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { Button } from "semantic-ui-react";
import { HeroContentCSS, MainContentCSS, HomeButtonCSS } from "./styles";

export const HeroContent = () => {
  const { t } = useTranslation("home");
  return (
    <HeroContentCSS>
      <MainContentCSS>
        <h1>{t("coBuildingInterchain")}</h1>
        <p>{t("homeDescription")}</p>
      </MainContentCSS>
      <HomeButtonCSS>
        <Link href="/about">
          <Button color="red">{t("aboutForbole")}</Button>
        </Link>
      </HomeButtonCSS>
    </HeroContentCSS>
  );
};

export default HeroContent;
