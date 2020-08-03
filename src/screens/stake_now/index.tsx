import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import {
  ForboleStakes,
  CalculateRewards,
  SupportedNetworks,
} from "./components";

const StakeNow = () => {
  const { t } = useTranslation("stake_now");

  return (
    <Layout title={t("title")}>
      <ForboleStakes />
      <CalculateRewards />
      <SupportedNetworks />
    </Layout>
  );
};

export default StakeNow;
