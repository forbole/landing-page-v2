import React from "react";
import { useTranslation } from "i18n";
import { CosmosContentCSS } from "./styles";

function CosmosContent() {
  const { t } = useTranslation("cosmos_hub");
  return (
    <CosmosContentCSS>
      <p>{t("cosmosContent1")}</p>
      <p>{t("cosmosContent2")}</p>
      <p>{t("cosmosContent3")}</p>
    </CosmosContentCSS>
  );
}

export default CosmosContent;
