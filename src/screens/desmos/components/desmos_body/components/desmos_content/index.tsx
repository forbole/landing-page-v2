import React from "react";
import { useTranslation } from "i18n";
import { BodyCSS } from "./styles";

const Body = () => {
  const { t } = useTranslation("desmos");
  return (
    <BodyCSS>
      <p>{t("bodyOne")}</p>
      <p>{t("bodyTwo")}</p>
      <p>
        {t("bodyThree")}{" "}
        <a
          href="https://twitter.com/desmosnetwork"
          target="_blank"
          rel="noreferrer"
          title={t("twitterOfDesmos")}
        >
          {t("twitterOfDesmos")}
        </a>{" "}
        {t("bodyFour")}
      </p>
    </BodyCSS>
  );
};

export default Body;
