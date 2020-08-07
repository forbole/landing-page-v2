import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import {
  BigDipperHeader,
  BigDipperContent,
  EcoProjects,
  DashboardContent,
} from "./components";

const BigDipper = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <Layout title={t("title")}>
      <BigDipperHeader />
      <BigDipperContent />
      <EcoProjects />
      <DashboardContent />
    </Layout>
  );
};

export default BigDipper;
