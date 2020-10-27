import { useState, useRef } from "react";
import * as R from "ramda";
import axios from "axios";
import { convertToMoney } from "@utils/convert_to_money";
import { getNetworkInfo } from "@utils/network_info";
import { networkFunctions, toFixed } from "./utils";

export const useCalculateRewardsHook = () => {
  const [tokens, setTokens] = useState<any | null>({
    value: "",
    display: "",
  });
  const [error, setError] = useState(false);
  const [selectedToken, setSelectedToken] = useState<string | null>("cosmos");
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

  const handleCalculations = async () => {
    try {
      const networkFunction = networkFunctions[selectedToken] ?? null;

      if (!selectedToken || !tokens?.value || !networkFunction) {
        return;
      }

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

      // calculations start here
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

      const promises = [bondedApi, inflationApi, supplyApi, stakingParamsApi];
      const [
        { data: bondedJson },
        { data: inflationJson },
        { data: supplyJson },
        { data: stakingParamsJson },
      ] = await Promise.all(promises);

      const bonded = networkFunction?.bonded(bondedJson);
      const inflation = networkFunction?.inflation(inflationJson);
      const supply = networkFunction?.supply(supplyJson);
      const commissionRate = networkFunction?.commissionRate(stakingParamsJson);

      // raw calcs
      const annualRewards = toFixed(
        ((tokens?.value * inflation) / (bonded / supply)) * (1 - commissionRate)
      );
      const monthlyRewards = annualRewards / 12;
      const dailyRewards = monthlyRewards / 12;

      // formats for display
      const formatAnnualRewards = convertToMoney(annualRewards, 2);
      const formatMonthlyRewards = convertToMoney(monthlyRewards, 2);
      const formatDailyRewards = convertToMoney(dailyRewards, 2);

      const { data: marketPriceJson } = await axios.get(networkFunction?.gecko);
      const marketPrice = networkFunction.marketPrice(marketPriceJson);

      const formatAnnualPrice = convertToMoney(annualRewards * marketPrice, 2);
      const formatMonthlyPrice = convertToMoney(
        monthlyRewards * marketPrice,
        2
      );
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
