import React from "react";
import { useTranslation } from "i18n";
import Popup from "reactjs-popup";
import useWindowSize from "@utils/get_screen_size";
import { screenSize } from "@styles";
import { Disclaimer } from "@icons";
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
  const { width } = useWindowSize();

  return (
    <CalculateRewardsCSS>
      <ContentCSS>
        <h2>
          {t("calculateRewards")}{" "}
          <Popup
            position={
              width <= screenSize.phone ? "bottom center" : "right center"
            }
            trigger={
              <button className="disclaimerIcon">
                <Disclaimer />
              </button>
            }
            on={["hover", "focus"]}
          >
            <span style={{ color: "rgba(100,100,100,1)" }}>
              only for reference
            </span>
          </Popup>
        </h2>

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
