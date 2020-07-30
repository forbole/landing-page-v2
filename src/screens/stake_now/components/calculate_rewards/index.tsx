import React from "react";
import { useTranslation } from "i18n";
import { CalculateRewardsCSS, ContentCSS } from "./styles";
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
      <ContentCSS>
        <h2>{t("calculateRewards")}</h2>
        <div className="main-content">
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
      </ContentCSS>
    </CalculateRewardsCSS>
  );
};

export default CalculateRewards;
