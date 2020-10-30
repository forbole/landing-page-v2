import { useState, useEffect } from "react";
import axios from "axios";
import * as R from "ramda";
import { getNetworkInfo } from "@utils/network_info";
import { networkFunctions } from "../../utils";
import { convertToMoney } from "@utils/convert_to_money";

export const useForboleStakesHook = () => {
  const [selected, setSelected] = useState(0);
  const [cosmos, setCosmos] = useState({
    title: "cosmosHub",
    totalAtom: 0,
    totalMarketValue: "0.00",
    currentMarketValue: "0.00",
    denom: "ATOM",
    voting: {
      title: "votingPower",
      atom: 32545,
      percent: 1.84,
    },
    selfDelegations: {
      title: "selfDelegations",
      atom: 32577,
      percent: 0.95,
    },
    otherDelegations: {
      title: "otherDelegations",
      atom: 3245,
      percent: 0.95,
    },
  });

  const getCosmos = async () => {
    const networkFunction = networkFunctions["cosmos"] ?? null;
    const { calculator } = getNetworkInfo("cosmos");
    const bondedApi = axios.post("/api/proxy", {
      url: calculator.bonded,
    });
    const stakingParamsApi = axios.post("/api/proxy", {
      url: calculator.stakingParams,
    });
    const marketPriceApi = axios.get(networkFunction?.gecko);

    const promises = [bondedApi, stakingParamsApi, marketPriceApi];

    const [
      { data: bondedJson },
      { data: stakingParamsJson },
      { data: marketPriceJson },
    ] = await Promise.all(promises);

    const totalAtom = networkFunction?.converter(
      Number(R.pathOr(0, ["result", "tokens"], stakingParamsJson))
    );
    const totalAtomFormat = convertToMoney(
      networkFunction?.converter(
        Number(R.pathOr(0, ["result", "tokens"], stakingParamsJson))
      )
    );
    const bonded = networkFunction?.bonded(bondedJson);
    const currentMarketValue = networkFunction.marketPrice(marketPriceJson);
    const totalMarketValue = convertToMoney(currentMarketValue * totalAtom);
    const votingPowerPercent = convertToMoney((totalAtom / bonded) * 100, 2);

    setCosmos(
      R.mergeDeepLeft(
        {
          totalAtom: totalAtomFormat,
          totalMarketValue,
          currentMarketValue,
          voting: {
            atom: totalAtomFormat,
            percent: votingPowerPercent,
          },
        },
        cosmos
      )
    );
  };

  useEffect(() => {
    try {
      getCosmos();
    } catch (err) {
      console.log(err);
    }
  }, [cosmos]);

  return {
    cosmos,
    selected,
    setSelected,
  };
};
