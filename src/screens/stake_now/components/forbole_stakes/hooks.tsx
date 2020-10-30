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
      atom: 0,
      percent: 0,
    },
    selfDelegations: {
      title: "selfDelegations",
      atom: 0,
      percent: 0,
    },
    otherDelegations: {
      title: "otherDelegations",
      atom: 0,
      percent: 0,
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
    const delegationsApi = axios.post("/api/proxy", {
      url:
        "http://lcd.cosmoshub.bigdipper.live/staking/delegators/cosmos14kn0kk33szpwus9nh8n87fjel8djx0y0mmswhp/delegations",
    });
    const marketPriceApi = axios.get(networkFunction?.gecko);

    const promises = [
      bondedApi,
      stakingParamsApi,
      delegationsApi,
      marketPriceApi,
    ];

    const [
      { data: bondedJson },
      { data: stakingParamsJson },
      { data: delegationsJson },
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
    //==========================
    // self-delegations
    //==========================
    const totalSelfDelegations = networkFunction?.converter(
      R.pathOr([], ["result"], delegationsJson)
        .filter(
          (x) =>
            x?.["validator_address"] ===
            "cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj"
        )
        .reduce((a, b) => (a += Number(b?.balance) ?? 0), 0)
    );
    const totalSelfDelegationsFormat = convertToMoney(totalSelfDelegations);
    const totalSelfDelegationsPercent = convertToMoney(
      (totalSelfDelegations / bonded) * 100,
      2
    );

    //==========================
    // other-delegations
    //==========================
    const otherDelegations = totalAtom - totalSelfDelegations;
    const otherDelegationsFormat = convertToMoney(otherDelegations);
    const otherDelegationsPercent = convertToMoney(
      (otherDelegations / bonded) * 100,
      2
    );
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
          selfDelegations: {
            atom: totalSelfDelegationsFormat,
            percent: totalSelfDelegationsPercent,
          },
          otherDelegations: {
            atom: otherDelegationsFormat,
            percent: otherDelegationsPercent,
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
  }, []);

  return {
    cosmos,
    selected,
    setSelected,
  };
};
