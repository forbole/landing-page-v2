import React from "react";
import { useTranslation } from "i18n";
import { CosmosHeaderCSS } from "./styles";

function CosmosHeader() {
  const { t } = useTranslation("cosmos_hub");
  return (
    <CosmosHeaderCSS>
      <div className="wrapper">
        <img
          className="cosmoslogo"
          src="static/images/icons/cosmos-hub.png"
          alt="cosmos-hub"
        ></img>
        <h2>{t("cosmosHub")}</h2>
      </div>
    </CosmosHeaderCSS>
  );
}

export default CosmosHeader;
