import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { BDHeader, BDContent, EcoProjects, DDContent } from "./components";

const BigDipper = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <Layout title={t("title")}>
      <BDHeader />
      <BDContent />
      <EcoProjects />
      <DDContent />
    </Layout>
  );
};

export default BigDipper;
