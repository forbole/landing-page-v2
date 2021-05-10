import { useState } from "react";
import * as R from "ramda";
import axios from "axios";
import { toast } from "react-toastify";
import { convertToMoney, convertWithDecimal } from "@utils/convert_to_money";
import { getNetworkInfo } from "@utils/network_info";
import { getStakingParams } from "./config";
import { networkFunctions, toFixed } from "../../utils";

export const useCalculateRewardsHook = (t: any) => {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<any | null>({
    value: "",
    display: "",
  });
  console.log(tokens);
  const [selectedToken, setSelectedToken] = useState<any>("cosmos");
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
    console.log(selectedToken);
    const networkFunction = networkFunctions[selectedToken.key] ?? null;
    const networkParams = getStakingParams(selectedToken.key);
    console.log(networkFunction, networkParams);
    //const { commissionRate, inflation, stakingRatio } = networkParams;
    //console.log(commissionRate, inflation, stakingRatio );
    if (!selectedToken || !tokens?.value || !networkFunction) {
      throw new Error();
    }
    // get the selected token
    const { calculator } = getNetworkInfo(selectedToken);
    // check it has all the links we need
    if (
      !calculator.bonded ||
      !calculator.inflation ||
      !calculator.supply ||
      !calculator.stakingParams
    ) {
      throw new Error();
    }
    // ===============================
    // calculations start here
    // ===============================
    const bondedApi = axios.post("/api/proxy", {
      url: calculator.bonded,
    });

    const inflationApi = axios.post("/api/proxy", {
      url: calculator.inflation,
    });

    const supplyApi = axios.post("/api/proxy", {
      url: calculator.supply,
    });

    const stakingParamsApi = axios.post("/api/proxy", {
      url: calculator.stakingParams,
    });

    const marketPriceApi = axios.get(networkFunction?.gecko);

    const promises = [
      bondedApi,
      inflationApi,
      supplyApi,
      stakingParamsApi,
      marketPriceApi,
    ];
    const [
      { data: bondedJson },
      { data: inflationJson },
      { data: supplyJson },
      { data: stakingParamsJson },
      { data: marketPriceJson },
    ] = await Promise.all(promises);

    const bonded = networkFunction?.bonded(bondedJson);
    const inflation = networkFunction?.inflation(inflationJson);
    const supply = networkFunction?.supply(supplyJson);
    const commissionRate = networkFunction?.commissionRate(stakingParamsJson);
    const marketPrice = networkFunction.marketPrice(marketPriceJson);
    // ===============================
    // raw calcs
    // ===============================
    const annualRewards = toFixed(
      ((tokens?.value * inflation) / (bonded / supply)) * (1 - commissionRate)
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
      console.log(`selected`, selectedToken, networkFunctions[selectedToken]);
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
