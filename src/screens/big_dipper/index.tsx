import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { BigDipperCSS } from "./styles";
import {
  BigDipperHeader,
  BigDipperContent,
  EcoProjects,
  DashboardContent,
} from "./components";

const BigDipper = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <BigDipperCSS>
      <Layout title={t("title")}>
        <BigDipperHeader />
        <BigDipperContent />
        <EcoProjects />
        <DashboardContent />
      </Layout>
    </BigDipperCSS>
  );
};

export default BigDipper;
