import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { BigDipperCSS } from "./styles";
import {
  BigDipperContent,
  BlockchainProjects,
  BigDipperStats,
} from "./components";

const BigDipper = () => {
  const { t } = useTranslation("products");
  return (
    <BigDipperCSS>
      <BigDipperContent />
      <BlockchainProjects />
      <BigDipperStats />
      {/* <DashboardContent /> */}
    </BigDipperCSS>
  );
};

export default BigDipper;
