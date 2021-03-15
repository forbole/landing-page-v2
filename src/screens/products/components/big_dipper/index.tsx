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
      <Layout
        title={t("title")}
        description={t("description")}
        image="/static/images/assets/Facebook-Bigdipper.png"
        twitterImage="/static/images/assets/Twitter-Bigdipper.png"
      >
        {/* <BigDipperHeader /> */}
        <BigDipperContent />
        <BlockchainProjects />
        {/* <DashboardContent /> */}
      </Layout>
    </BigDipperCSS>
  );
};

export default BigDipper;
