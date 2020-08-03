import React from "react";
import { useTranslation } from "i18n";
import { CosmosHeaderCSS } from "./styles";

function CosmosHeader() {
  const { t } = useTranslation("cosmos_hub");
  return (
    <CosmosHeaderCSS>
      <img src="images/icons/cosmos_hub.png" alt="cosmos-hub"></img>
      <p>{t("cosmosHub")}</p>
    </CosmosHeaderCSS>
  );
}

export default CosmosHeader;
