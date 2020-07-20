import React from "react";
import { useTranslation } from "i18n";
import {
  BodyImageContainerCSS,
  DecentralizedCSS,
  MooncakeBodyCSS,
  ButtonsCSS,
  BodyCSS,
} from "./styles";

const Mobile = () => {
  const { t } = useTranslation("desmos");

  return (
    <BodyCSS>
      <BodyImageContainerCSS>
        <img src="images/assets/mooncake_screenshot_one.png" />
        <img src="images/assets/mooncake_screenshot_two.png" />
      </BodyImageContainerCSS>
      <DecentralizedCSS>{t("decentralized")}</DecentralizedCSS>
      <MooncakeBodyCSS>
        <h3>{t("mooncake")}</h3>
        <p>{t("mooncakeBodyOne")}</p>
        <p>{t("mooncakeBodyTwo")}</p>
        <p>{t("mooncakeBodyThree")}</p>
      </MooncakeBodyCSS>
      <ButtonsCSS>
        <div>apple</div>
        <div>google</div>
      </ButtonsCSS>
    </BodyCSS>
  );
};

export default Mobile;
