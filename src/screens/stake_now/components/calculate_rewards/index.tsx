import React from "react";
import { useTranslation } from "i18n";
import { CalculateRewardsCSS } from "./styles";
import Networks from "./components/networks";
import Calculator from "./components/calculator";
import { useCalculateRewardsHook } from "./hooks";

const CalculateRewards = () => {
  const { t } = useTranslation("stake_now");
  const {
    selectedToken,
    setSelectedToken,
    inputElement,
    handleCalculations,
    totalEarnings,
  } = useCalculateRewardsHook();

  return (
    <CalculateRewardsCSS>
      <h2>{t("calculateRewards")}</h2>
      <div>
        <Networks
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
        <Calculator
          inputElement={inputElement}
          handleCalculations={handleCalculations}
          totalEarnings={totalEarnings}
        />
      </div>
    </CalculateRewardsCSS>
  );
};

export default CalculateRewards;
