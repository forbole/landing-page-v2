import React from "react";
import { useTranslation } from "i18n";
import { CalculateRewardsCSS, ContentCSS } from "./styles";
import Networks from "./components/networks";
import Calculator from "./components/calculator";
import { useCalculateRewardsHook } from "./hooks";
import classNames from "classnames";

const CalculateRewards = () => {
  const { t } = useTranslation("stake_now");
  const {
    selectedToken,
    setSelectedToken,
    handleCalculations,
    totalEarnings,
    handleChange,
    tokens,
    error,
  } = useCalculateRewardsHook();

  return (
    <CalculateRewardsCSS>
      <ContentCSS>
        <h2>{t("calculateRewards")}</h2>
        <div className={classNames("hidden", { error })}>{t("error")}</div>
        <div className="main-content">
          <Networks
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
          />
          <Calculator
            handleCalculations={handleCalculations}
            totalEarnings={totalEarnings}
            handleChange={handleChange}
            tokens={tokens}
          />
        </div>
      </ContentCSS>
    </CalculateRewardsCSS>
  );
};

export default CalculateRewards;
