import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { StakingCover, WhatIsStaking, EcoSystemProjects } from "./components";

const Staking = () => {
  const { t } = useTranslation("staking");
  return (
    <Layout title={t("title")}>
      <StakingCover />
      <WhatIsStaking />
      <EcoSystemProjects />
    </Layout>
  )
}

export default Staking;
