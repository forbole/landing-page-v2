import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { StakingCover } from "./components";

const Staking = () => {
  const { t } = useTranslation("staking");
  return (
    <Layout title={t("title")}>
      <StakingCover />
    </Layout>
  )
}

export default Staking;
