import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { CosmosContent, NetworkHeader } from "./components";

function Network(props) {
  console.log(props, "my props");
  const { t } = useTranslation("cosmos_hub");
  return (
    <Layout title={t("title")}>
      <NetworkHeader {...props} />
      <CosmosContent />
    </Layout>
  );
}

export default Network;
