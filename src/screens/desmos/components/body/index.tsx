import React from "react";
import { useTranslation } from "i18n";
import { BodyCSS, BodyImageContainerCSS } from "./styles";

const Body = () => {
  const { t } = useTranslation("desmos");
  return (
    <BodyCSS>
      <p>
        {t("bodyOne")}{" "}
        <a
          href="https://twitter.com/desmosnetwork"
          target="_blank"
          rel="noreferrer"
          title={t("twitterOfDesmos")}
        >
          {t("twitterOfDesmos")}
        </a>{" "}
        {t("bodyTwo")}
      </p>
      <BodyImageContainerCSS>
        <img src="images/assets/mooncake_screenshot_one.png" />
        <img src="images/assets/mooncake_screenshot_two.png" />
      </BodyImageContainerCSS>
      <h3>{t("decentralized")}</h3>
      <h2>{t("mooncake")}</h2>
      <p>{t("mooncakeBodyOne")}</p>
      <p>{t("mooncakeBodyTwo")}</p>
      <p>{t("mooncakeBodyThree")}</p>
    </BodyCSS>
  );
};

export default Body;
