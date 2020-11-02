import React from "react";
import { useTranslation } from "i18n";
import { AppStoreButton, GooglePlayButton } from "@icons";
import { DecentralizedCSS, MooncakeBodyCSS, ButtonsCSS } from "./styles";
import { mooncakeLinks } from "./config";

const MooncakeDetails = () => {
  const { t } = useTranslation("desmos");
  return (
    <>
      <DecentralizedCSS>{t("decentralized")}</DecentralizedCSS>
      <MooncakeBodyCSS>
        <h3>{t("mooncake")}</h3>
        <p>
          {t("mooncakeBodyOne")}
          <br />
          {t("mooncakeBodyTwo")}
          <br />
          {t("mooncakeBodyThree")}
        </p>
      </MooncakeBodyCSS>
      <ButtonsCSS>
        <a href={mooncakeLinks?.apple} target="_blank" rel="noreferrer">
          <AppStoreButton />
        </a>
        <a href={mooncakeLinks?.google} target="_blank" rel="noreferrer">
          <div className="resize">
            <GooglePlayButton />
          </div>
        </a>
      </ButtonsCSS>
    </>
  );
};

export default MooncakeDetails;
