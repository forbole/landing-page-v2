import React from "react";
import { useTranslation } from "i18n";
import { CosmosHeaderCSS } from "./styles";

function CosmosHeader() {
  const { t } = useTranslation("cosmos_hub");
  return (
    <CosmosHeaderCSS>
      <img
        className="cosmoslogo"
        src="images/icons/cosmos_hub.png"
        alt="cosmos-hub"
      ></img>
      <h2>{t("cosmosHub")}</h2>
    </CosmosHeaderCSS>
  );
}

export default CosmosHeader;
