import React from "react";
import { useTranslation } from "i18n";
import { CalculateRewardsCSS } from "./styles";
import Networks from "./components/networks";

const CalculateRewards = () => {
  const { t } = useTranslation("stake_now");
  return (
    <CalculateRewardsCSS>
      <h2>{t("calculateRewards")}</h2>
      <div>
        <Networks />
        <div>form another div</div>
      </div>
    </CalculateRewardsCSS>
  );
};

export default CalculateRewards;
