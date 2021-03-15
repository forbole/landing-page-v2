import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { BigDipperCSS } from "./styles";
import {
  //   BigDipperHeader,
  BigDipperContent,
  BlockchainProjects,
} from "./components";

const BigDipper = () => {
  const { t } = useTranslation("products");
  return (
    <BigDipperCSS>
      <BigDipperContent />
      <BlockchainProjects />
      {/* <DashboardContent /> */}
    </BigDipperCSS>
  );
};

export default BigDipper;
