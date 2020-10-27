import { useState, useRef } from "react";
import * as R from "ramda";
import axios from "axios";
import { convertToMoney } from "@utils/convert_to_money";
import { getNetworkInfo } from "@utils/network_info";
export const useCalculateRewardsHook = () => {
  const [tokens, setTokens] = useState({
    value: "",
    display: "",
  });
  const [error, setError] = useState(false);
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

  const handleCalculations = async () => {
    try {
      if (!selectedToken || !tokens?.value) {
        return;
      }
      console.log(selectedToken, "selectedToken");
      console.log(tokens.value, "valu");
      // get the selected token
      const network = getNetworkInfo(selectedToken);
      const { calculator } = network;
      // check it has all the links we need
      if (
        !calculator.bonded ||
        !calculator.inflation ||
        !calculator.supply ||
        !calculator.stakingParams
      ) {
        return;
      }
      console.log("made it to the end");

      const { data: bonded } = await axios.get(calculator.bonded);
      console.log(bonded, "bonded");

      // finally
      if (error) {
        setError(false);
      }
    } catch (err) {
      setError(true);
    }
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
    error,
  };
};
