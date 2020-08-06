import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { BDHeader, BDContent, EcoProjects } from "./components";

const BigDipper = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <Layout title={t("title")}>
      <BDHeader />
      <BDContent />
      <EcoProjects />
    </Layout>
  );
};

export default BigDipper;
