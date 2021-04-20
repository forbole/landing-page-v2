/* eslint-disable */
import { useState, useEffect } from "react";
import axios from "axios";
import * as R from "ramda";
import { getNetworkInfo } from "@utils/network_info";
import { networkFunctions } from "../../utils";
import { convertToMoney, moneyToInt } from "@utils/convert_to_money";
import { cosmosData, vsysData } from "./config";

export const useForboleStakesHook = () => {
  const [selected, setSelected] = useState(0);

  // Cosmos-Based Networks
  const cosmosBasedNetwork = [];
  for (let i = 0; i < cosmosData.length; i++) {
    cosmosBasedNetwork.push({
      title: cosmosData[i].title ?? null,
      totalToken: "---",
      totalMarketValue: "---",
      currentMarketValue: "---",
      denom: cosmosData[i].denom ?? null,
      voting: {
        title: "votingPower",
        token: "---",
        percent: "---",
      },
      selfDelegations: {
        title: "selfDelegations",
        token: "---",
        percent: "---",
      },
      otherDelegations: {
        title: "otherDelegations",
        token: "---",
        percent: "---",
      },
    });
  }

  const [cosmosNetwork, setCosmosNetwork] = useState(cosmosBasedNetwork);
  const [cosmos, setCosmos] = useState(cosmosNetwork[0]);
  const [terra, setTerra] = useState(cosmosNetwork[1]);
  const [kava, setKava] = useState(cosmosNetwork[2]);
  const [likecoin, setLikecoin] = useState(cosmosNetwork[3]);
  const [iov, setIOV] = useState(cosmosNetwork[4]);
  const [band, setBand] = useState(cosmosNetwork[5]);
  const [akash, setAkash] = useState(cosmosNetwork[6]);
  const [emoney, setEmoney] = useState(cosmosNetwork[7]);
  const [iris, setIris] = useState(cosmosNetwork[8]);

  const getCosmosBasedNetwork = async () => {
    const updatedArr = [];
    for (let x = 0; x < cosmosData.length; x++) {
      const networkFunction = networkFunctions[cosmosData[x]?.name];

      const { calculator } = getNetworkInfo(cosmosData[x]?.network ?? null);
      const bondedApi = axios.post("/api/proxy", {
        url: calculator.bonded,
      });
      const stakingParamsApi = axios.post("/api/proxy", {
        url: calculator.stakingParams,
      });
      const delegationsApi = axios.post("/api/proxy", {
        url: cosmosData[x]?.delegationsApi,
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
      const totalToken = networkFunction?.converter(
        Number(R.pathOr(0, ["result", "tokens"], stakingParamsJson)) ?? 100000
      );
      const totalTokenFormat = convertToMoney(
        networkFunction?.converter(
          Number(R.pathOr(0, ["result", "tokens"], stakingParamsJson))
        )
      );

      const bonded = networkFunction?.bonded(bondedJson);
      const currentMarketValue = networkFunction.marketPrice(marketPriceJson);
      const totalMarketValue = convertToMoney(currentMarketValue * totalToken);
      const votingPowerPercent = convertToMoney((totalToken / bonded) * 100, 2);
      //==========================
      // self-delegations
      //==========================

      let totalSelfDelegations = 0;

      for (let i = 0; i < cosmosData[x].validator_address.length; i++) {
        // const totalSelfDelegation = networkFunction?.converter(
        //   R.pathOr([], ["result"], delegationsJson)
        //     .filter(
        //       (y) =>
        //         y?.[cosmosData[x]?.address ?? null] ===
        //           cosmosData[x]?.validator_address[i] ?? null
        //     )
        //     .reduce(
        //       (a, b) => (a += Number(b?.balance?.amount ?? b?.balance) ?? 0.0),
        //       totalSelfDelegations ?? 0.0
        //     )
        // );
        const totalSelfDelegation = networkFunction?.converter(
          R.pathOr([""], ["result"], delegationsJson)
            .filter((y) =>
              "delegation" in y
                ? y.delegation[cosmosData[x]?.address ?? 0] ===
                    cosmosData[x]?.validator_address[i] ?? 0
                : y?.[cosmosData[x]?.address ?? 0] ===
                    cosmosData[x]?.validator_address[i] ?? 0
            )
            .reduce(
              (a, b) => (a += Number(b?.balance?.amount ?? b?.balance) ?? 0.0),
              totalSelfDelegations ?? 0.0
            )
        );
        totalSelfDelegations += totalSelfDelegation;
      }

      const totalSelfDelegationsFormat = convertToMoney(totalSelfDelegations);
      const totalSelfDelegationsPercent = convertToMoney(
        (totalSelfDelegations / bonded) * 100,
        2
      );

      //==========================
      // other-delegations
      //==========================
      const otherDelegations = totalToken - totalSelfDelegations;
      const otherDelegationsFormat = convertToMoney(otherDelegations);
      const otherDelegationsPercent = convertToMoney(
        (otherDelegations / bonded) * 100,
        2
      );

      // resolve any possible Promise error (in case any api endpoint doesn't work )
      try {
        updatedArr.push({
          title: cosmosData[x]?.title,
          denom: cosmosData[x]?.denom,
          totalToken: totalTokenFormat,
          totalMarketValue,
          currentMarketValue,
          voting: {
            title: "votingPower",
            token: totalTokenFormat,
            percent: votingPowerPercent,
          },
          selfDelegations: {
            title: "selfDelegations",
            token: totalSelfDelegationsFormat,
            percent: totalSelfDelegationsPercent,
          },
          otherDelegations: {
            title: "otherDelegations",
            token: otherDelegationsFormat,
            percent: otherDelegationsPercent,
          },
        });
        let state = {
          title: cosmosData[x]?.title,
          denom: cosmosData[x]?.denom,
          totalToken: totalTokenFormat,
          totalMarketValue,
          currentMarketValue,
          voting: {
            title: "votingPower",
            token: totalTokenFormat,
            percent: votingPowerPercent,
          },
          selfDelegations: {
            title: "selfDelegations",
            token: totalSelfDelegationsFormat,
            percent: totalSelfDelegationsPercent,
          },
          otherDelegations: {
            title: "otherDelegations",
            token: otherDelegationsFormat,
            percent: otherDelegationsPercent,
          },
        };
        switch (x) {
          case 0:
            setCosmos(state);
            break;
          case 1:
            setTerra(state);
            break;
          case 2:
            setKava(state);
            break;
          case 3:
            setLikecoin(state);
            break;
          case 4:
            setIOV(state);
            break;
          case 5:
            setBand(state);
            break;
          case 6:
            setAkash(state);
            break;
          case 7:
            setEmoney(state);
            break;
          case 8:
            setIris(state);
            break;
        }
      } catch (err) {
        console.log(err);
        updatedArr.push({
          title: cosmosData[x].title ?? null,
          totalToken: 0,
          totalMarketValue: "0.00",
          currentMarketValue: "0.00",
          denom: cosmosData[x].denom ?? null,
          voting: {
            title: "votingPower",
            token: 0,
            percent: 0,
          },
          selfDelegations: {
            title: "selfDelegations",
            token: 0,
            percent: 0,
          },
          otherDelegations: {
            title: "otherDelegations",
            token: 0,
            percent: 0,
          },
        });
      }
    }
    setCosmosNetwork(updatedArr);
  };

  // V System
  const [vsys, setVSYS] = useState({
    title: vsysData[0].title,
    totalToken: "---",
    totalMarketValue: "---",
    currentMarketValue: "---",
    denom: vsysData[0].denom,
    voting: {
      title: "votingPower",
      token: "---",
      percent: "---",
    },
    selfDelegations: {
      title: "selfDelegations",
      token: "---",
      percent: "---",
    },
    otherDelegations: {
      title: "otherDelegations",
      token: "---",
      percent: "---",
    },
  });

  const getVSYSNetwork = async () => {
    const networkFunction = networkFunctions["vsys"] ?? null;

    const bondedApi = axios.post("/api/proxy", {
      url: "https://api.vsys.forbole.com/consensus/allSlotsInfo",
    });
    const selfDelegationsApi = axios.post("/api/proxy", {
      url:
        "https://api.vsys.forbole.com/addresses/balance/details/AR6AnRmynHBchobnxTr8rUvZyYEPNFsBBqE",
    });
    const tokensApi = axios.post("/api/proxy", {
      url: "https://api.vsys.forbole.com/consensus/slotInfo/32",
    });
    const marketPriceApi = axios.get(networkFunction?.gecko);

    const promises = [bondedApi, selfDelegationsApi, tokensApi, marketPriceApi];

    const [
      { data: bondedJson },
      { data: selfDelegationsJson },
      { data: tokensJson },
      { data: marketPriceJson },
    ] = await Promise.all(promises);

    const totalVSYS = networkFunction?.converter(
      Number(R.pathOr(0, ["mintingAverageBalance"], tokensJson))
    );
    const totalVSYStokens = totalVSYS / 100;
    const totalVSYSFormat = convertToMoney(totalVSYStokens);

    let bonded = 0;
    for (let i = 1; i < bondedJson.length - 1; i++) {
      bonded = bonded + bondedJson[i].mintingAverageBalance;
    }
    const bondedTokens = bonded / 100000000;

    const currentMarketValue = networkFunction.marketPrice(marketPriceJson);
    const totalMarketValue = convertToMoney(
      currentMarketValue * totalVSYStokens
    );
    const votingPowerPercent = convertToMoney(
      (totalVSYStokens / bondedTokens) * 100,
      2
    );

    //==========================
    // self-delegations
    //==========================
    const totalSelfDelegations = networkFunction?.converter(
      R.pathOr([], ["mintingAverage"], selfDelegationsJson)
    );

    const totalSelfDelegationsFormat = convertToMoney(totalSelfDelegations);

    const totalSelfDelegationsPercent = convertToMoney(
      (totalSelfDelegations / bondedTokens) * 100,
      2
    );
    //==========================
    // other-delegations
    //==========================
    const otherDelegations = totalVSYStokens - totalSelfDelegations;
    const otherDelegationsFormat = convertToMoney(otherDelegations);
    const otherDelegationsPercent = convertToMoney(
      (otherDelegations / bondedTokens) * 100,
      2
    );

    setVSYS(
      R.mergeDeepLeft(
        {
          totalToken: totalVSYSFormat,
          totalMarketValue,
          currentMarketValue,
          voting: {
            token: totalVSYSFormat,
            percent: votingPowerPercent,
          },
          selfDelegations: {
            token: totalSelfDelegationsFormat,
            percent: totalSelfDelegationsPercent,
          },
          otherDelegations: {
            token: otherDelegationsFormat,
            percent: otherDelegationsPercent,
          },
        },
        vsys
      )
    );
  };

  const [totalUSD, setNetworkUSD]: any = useState(0);

  const getNetworkUSD = async () => {
    const cosmosNetworkTotalUSD = await cosmosNetwork
      .map((x) => moneyToInt(x.totalMarketValue))
      .reduce((a, b) => (a += b));

    const vsysTotalUSD = await moneyToInt(vsys.totalMarketValue);

    // const irisTotalUSD = await moneyToInt(iris.totalMarketValue);

    const totalUSD = cosmosNetworkTotalUSD + vsysTotalUSD;

    setNetworkUSD(totalUSD);
  };

  useEffect(() => {
    getCosmosBasedNetwork()
      // .then(() => getIrisNetwork())
      .then(() => getVSYSNetwork());
  }, []);

  useEffect(() => {
    try {
      getNetworkUSD();
    } catch (err) {
      console.log(err);
    }
  }, [cosmosNetwork, vsys]);

  return {
    cosmos,
    terra,
    kava,
    likecoin,
    iov,
    band,
    akash,
    emoney,
    cosmosNetwork,
    iris,
    vsys,
    totalUSD,
    selected,
    setSelected,
  };
};
