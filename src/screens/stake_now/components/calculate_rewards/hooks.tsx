import { useState } from "react";
import * as R from "ramda";
import axios from "axios";
import { toast } from "react-toastify";
import { convertToMoney, convertWithDecimal } from "@utils/convert_to_money";
import { getStakingParams } from "./config";
import { networkFunctions, toFixed } from "../../utils";

export const useCalculateRewardsHook = (t: any) => {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<any | null>({
    value: "",
    display: "",
  });
  const [selectedToken, setSelectedToken] = useState<any>("");
  const [totalEarnings, setTotalEarnings] = useState({
    dailyEarnings: {
      tokens: "0",
      amount: "0",
    },
    monthlyEarnings: {
      tokens: "0",
      amount: "0",
    },
    yearlyEarnings: {
      tokens: "0",
      amount: "0",
    },
  });

  const handleDefaultCalculation = async () => {
    const networkFunction = networkFunctions[selectedToken.key] ?? null;
    const networkParams = getStakingParams(selectedToken.key);
    const { commissionRate, inflation, stakingRatio } = networkParams;
    if (!selectedToken || !tokens?.value) {
      throw new Error();
    }

    const marketPriceApi = await axios.get(networkFunction?.gecko);

    const { data: marketPriceJson } = marketPriceApi;

    const marketPrice = networkFunction.marketPrice(marketPriceJson);
    // ===============================
    // raw calcs
    // ===============================
    const annualRewards = toFixed(
      ((tokens?.value * inflation) / (inflation / stakingRatio)) *
        (1 - commissionRate)
    );
    const monthlyRewards = annualRewards / 12;
    const dailyRewards = monthlyRewards / 30;

    // ===============================
    // formats for display
    // ===============================
    const formatAnnualRewards = convertToMoney(annualRewards, 2);
    const formatMonthlyRewards = convertToMoney(monthlyRewards, 2);
    const formatDailyRewards = convertToMoney(dailyRewards, 2);
    const formatAnnualPrice = convertToMoney(annualRewards * marketPrice, 2);
    const formatMonthlyPrice = convertToMoney(monthlyRewards * marketPrice, 2);
    const formatDailyPrice = convertToMoney(dailyRewards * marketPrice, 2);

    setTotalEarnings({
      dailyEarnings: {
        tokens: formatDailyRewards,
        amount: formatDailyPrice,
      },
      monthlyEarnings: {
        tokens: formatMonthlyRewards,
        amount: formatMonthlyPrice,
      },
      yearlyEarnings: {
        tokens: formatAnnualRewards,
        amount: formatAnnualPrice,
      },
    });
  };

  const handleCalculations = async () => {
    try {
      setLoading(true);
      await handleDefaultCalculation();
      setLoading(false);
    } catch (err) {
      toast.error(t("error"));
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const value = R.pathOr(0, ["target", "value"], e);
    if (!value) {
      setTokens({
        value: "",
        display: "",
      });
      return;
    }
    // edge cases setup
    const exceptions = [".", "0"];
    let occurance = 0;
    value.split("").forEach((x) => {
      if (x === ".") {
        occurance += 1;
      }
    });

    // already has a decimal place
    if (occurance > 1 && value[value.length - 1] === ".") {
      return;
    }
    // handles edge cases
    if (exceptions.includes(value[value.length - 1])) {
      setTokens({
        value: value,
        display: value,
      });
    } else {
      const rawNumber = value.replace(/[^\d.]/g, "")
        ? Number(value.replace(/[^\d.]/g, ""))
        : "";
      const convertedNumber = convertWithDecimal(rawNumber);
      setTokens({
        value: rawNumber,
        display: convertedNumber,
      });
    }
  };

  return {
    selectedToken,
    setSelectedToken,
    handleCalculations,
    totalEarnings,
    handleChange,
    tokens,
    loading,
  };
};
