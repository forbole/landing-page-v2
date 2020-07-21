import React from "react";
import { useTranslation } from "i18n";
import {
  DecentralizedCSS,
  MooncakeBodyCSS,
  ButtonsCSS,
} from "./styles";

const MooncakeDetails = () => {
  const { t } = useTranslation("desmos");
  return (
    <>
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
    </>
  );
};

export default MooncakeDetails;
