import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import {
  ForboleStakes,
  CalculateRewards,
  SupportedNetworks,
} from "./components";
import { StakeNowCSS } from "./styles";

const StakeNow = () => {
  const { t } = useTranslation("stake_now");

  return (
    <Layout title={t("title")}>
      <StakeNowCSS>
        <ForboleStakes />
        <CalculateRewards />
        <SupportedNetworks />
      </StakeNowCSS>
    </Layout>
  );
};

export default StakeNow;
