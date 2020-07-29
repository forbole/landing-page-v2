import React from "react";
import { useTranslation } from "i18n";
import { CalculateRewardsCSS } from "./styles";
import Networks from "./components/networks";
import { useCalculateRewardsHook } from "./hooks";

const CalculateRewards = () => {
  const { t } = useTranslation("stake_now");
  const { selectedToken, setSelectedToken } = useCalculateRewardsHook();

  return (
    <CalculateRewardsCSS>
      <h2>{t("calculateRewards")}</h2>
      <div>
        <Networks
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
        <div>form another div</div>
      </div>
    </CalculateRewardsCSS>
  );
};

export default CalculateRewards;
