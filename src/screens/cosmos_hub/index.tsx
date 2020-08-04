import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { CosmosContent, CosmosHeader } from "./components";

function CosmosHub() {
  const { t } = useTranslation("cosmos_hub");
  return (
    <Layout title={t("title")}>
      <CosmosHeader />
      <CosmosContent />
    </Layout>
  );
}

export default CosmosHub;
