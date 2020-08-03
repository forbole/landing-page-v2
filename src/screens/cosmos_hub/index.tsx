import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { CosmosHubCSS } from "./styles";
import { CosmosContent, CosmosHeader } from "./components";

function CosmosHub() {
  const { t } = useTranslation("cosmos_hub");
  return (
    <Layout title={t("title")}>
      <CosmosHubCSS>
        <CosmosHeader />
        <CosmosContent />
      </CosmosHubCSS>
    </Layout>
  );
}

export default CosmosHub;
