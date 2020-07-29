import { useState, useRef } from "react";
import * as R from "ramda";

export const useCalculateRewardsHook = () => {
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [totalEarnings, setTotalEarnings] = useState({
    dailyEarnings: {
      tokens: 0,
      amount: 0,
    },
    monthlyEarnings: {
      tokens: 0,
      amount: 0,
    },
    yearlyEarnings: {
      tokens: 0,
      amount: 0,
    },
  });

  const inputElement = useRef<any | null>(null);

  const handleCalculations = () => {
    const value = R.pathOr(
      0,
      ["current", "inputRef", "current", "value"],
      inputElement
    );
  };

  return {
    selectedToken,
    setSelectedToken,
    inputElement,
    handleCalculations,
    totalEarnings,
  };
};
