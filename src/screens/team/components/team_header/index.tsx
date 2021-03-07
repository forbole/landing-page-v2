import React from "react";
import { useTranslation } from "i18n";
import { TeamHeaderCSS } from "./styles";

const TeamHeader = () => {
  const { t } = useTranslation("team");
  return (
    <TeamHeaderCSS>
      <h2>{t("heading")}</h2>
      <p>{t("heroDetails1")}</p>
      <p>{t("heroDetails2")}</p>
      <p>{t("heroDetails3")}</p>
    </TeamHeaderCSS>
  );
};

export default TeamHeader;
