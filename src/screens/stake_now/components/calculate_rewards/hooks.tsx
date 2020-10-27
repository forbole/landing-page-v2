import { useState, useRef } from "react";
import * as R from "ramda";
import { convertToMoney } from "@utils/convert_to_money";

export const useCalculateRewardsHook = () => {
  const [tokens, setTokens] = useState({
    value: "",
    display: "",
  });

  const [selectedToken, setSelectedToken] = useState<string | null>("cosmos");
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

  // const inputElement = useRef<any | null>(null);

  const handleCalculations = () => {
    if (!selectedToken || !tokens?.value) {
      return;
    }
    console.log(selectedToken, "selectedToken");
    console.log(tokens.value, "valu");
    // const value = R.pathOr(
    //   0,
    //   ["current", "inputRef", "current", "value"],
    //   inputElement
    // );
    // console.log(selectedToken, "selected");
    // console.log(value, "the value");
  };

  const handleChange = (e: any) => {
    const value = R.pathOr(0, ["target", "value"], e);
    const rawNumber = value.replace(/\D/g, "");
    const convertedNumber = convertToMoney(rawNumber);
    console.log(convertedNumber, "convert");
    setTokens({
      value: rawNumber,
      display: convertedNumber,
    });
  };

  return {
    selectedToken,
    setSelectedToken,
    handleCalculations,
    totalEarnings,
    handleChange,
    tokens,
  };
};
