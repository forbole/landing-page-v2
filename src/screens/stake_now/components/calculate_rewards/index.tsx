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
    handleCalculations,
    totalEarnings,
    handleChange,
    tokens,
    loading,
  } = useCalculateRewardsHook(t);

  return (
    <CalculateRewardsCSS>
      <ContentCSS>
        <h2>{t("calculateRewards")}</h2>
        <div className="main-content">
          <Networks
            key={selectedToken}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
          />
          <Calculator
            handleCalculations={handleCalculations}
            totalEarnings={totalEarnings}
            handleChange={handleChange}
            selectedToken={selectedToken}
            tokens={tokens}
            loading={loading}
          />
        </div>
      </ContentCSS>
    </CalculateRewardsCSS>
  );
};

export default CalculateRewards;
