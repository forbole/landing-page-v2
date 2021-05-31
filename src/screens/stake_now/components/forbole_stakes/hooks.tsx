/* eslint-disable */
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import * as R from "ramda";
import { getNetworkInfo } from "@utils/network_info";
import { networkFunctions } from "../../utils";
import { convertToMoney } from "@utils/convert_to_money";
import { IModelProps } from "./interfaces";
import { cosmosData, vsysData, getDataParams } from "./config";

export const useForboleStakesHook = () => {
  //const state = () => cosmosData;
  // const modelInitializer = () => {
  //   // Cosmos-Based Networks
  //   const network = [];
  //   for (let i = 0; i < cosmosData.length; i++) {
  //     network.push({
  //       title: cosmosData[i].title ?? null,
  //       totalToken: 0,
  //       totalUSDPrice: 0,
  //       totalMarketValue: 0,
  //       currentMarketValue: 0,
  //       denom: cosmosData[i].denom ?? null,
  //       voting: {
  //         title: "votingPower",
  //         token: 0,
  //         percent: 0,
  //       },
  //       selfDelegations: {
  //         title: "selfDelegations",
  //         token: 0,
  //         percent: 0,
  //       },
  //       otherDelegations: {
  //         title: "otherDelegations",
  //         token: 0,
  //         percent: 0,
  //       },
  //     });
  //   }
  //   return network;
  // };

  // const network = [];
  // for (let i = 0; i < cosmosData.length; i++) {
  //   network.push({
  //     title: cosmosData[i].title ?? null,
  //     totalToken: 0,
  //     totalUSDPrice: 0,
  //     totalMarketValue: 0,
  //     currentMarketValue: 0,
  //     denom: cosmosData[i].denom ?? null,
  //     voting: {
  //       title: "votingPower",
  //       token: 0,
  //       percent: 0,
  //     },
  //     selfDelegations: {
  //       title: "selfDelegations",
  //       token: 0,
  //       percent: 0,
  //     },
  //     otherDelegations: {
  //       title: "otherDelegations",
  //       token: 0,
  //       percent: 0,
  //     },
  //   });
  // }

  const [totalUSD, setNetworkUSD] = useState(0);

  // Cosmos-Based Networks
  const cosmosBasedNetwork = [];
  for (let i = 0; i < cosmosData.length; i++) {
    cosmosBasedNetwork.push({
      title: cosmosData[i].title ?? null,
      totalToken: 0,
      totalUSDPrice: 0,
      totalMarketValue: 0,
      currentMarketValue: 0,
      denom: cosmosData[i].denom ?? null,
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

  const getNetwork = async (input) => {
    // console.log(`cosmosInput`, input);
    const networkFunction = networkFunctions[input.name] ?? null;
    //console.log(networkFunction);
    const networkParams = getDataParams(input.name);
    //console.log(`networkParams`, networkParams);
    // console.log(`network function`, networkFunction);
    const marketPriceApi = await axios.get(networkFunction?.gecko);

    const { data: marketPriceJson } = marketPriceApi;

    const currentMarketValue = networkFunction.marketPrice(marketPriceJson);
    // console.log(`market price`, currentMarketValue);
    const { totalTokenData, bondedData, selfDelegation } = networkParams;
    const totalToken = networkFunction?.converter(totalTokenData);
    const bondedToken = networkFunction?.converter(bondedData);
    // console.log(`total token`, convertToMoney(totalToken));
    // console.log(`bonded`, bondedToken);
    // console.log(`voting power`, totalToken / bondedToken);
    const totalTokenFormat = convertToMoney(totalToken);
    const votingPowerPercent = convertToMoney(totalToken / bondedToken, 2);
    const totalMarketValue = convertToMoney(currentMarketValue * totalToken);
    const totalUSDPrice = currentMarketValue * totalToken;

    //console.log(`data`, totalTokenFormat, votingPowerPercent, totalUSDPrice);

    try {
      let state = {
        title: input.title,
        denom: input.denom,
        network: input.network,
        totalToken: totalTokenFormat,
        totalUSDPrice,
        totalMarketValue,
        currentMarketValue,
        voting: {
          title: "votingPower",
          token: totalTokenFormat,
          percent: votingPowerPercent,
        },
      };
      switch (input.name) {
        case "cosmos":
          setCosmos(state);
          break;
        case "terra":
          setTerra(state);
          break;
        case "kava":
          setKava(state);
          break;
      }
    } catch (err) {
      console.log(err);
      let failedState = {
        title: input.title ?? null,
        totalToken: 0,
        totalMarkefailedStatetValue: "0.00",
        currentMarketValue: "0.00",
        denom: input.denom ?? null,
        network: input?.network ?? null,
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
      };
      switch (input.name) {
        case "cosmos":
          setCosmos(failedState);
          break;
        case "terra":
          setTerra(failedState);
          break;
        case "kava":
          setKava(failedState);
          break;
      }
    }
  };

  const getCosmosNetwork = async (input) => {
    const networkFunction = networkFunctions[input?.name];

    const { calculator } = getNetworkInfo(input?.network ?? null);
    const bondedApi = axios.post("/api/proxy", {
      url: calculator.bonded,
    });
    const stakingParamsApi = axios.post("/api/proxy", {
      url: calculator.stakingParams,
    });
    const delegationsApi = axios.post("/api/proxy", {
      url: input?.delegationsApi,
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
    //console.log(`regular`, convertToMoney(totalToken), convertToMoney(bonded));
    const currentMarketValue = networkFunction.marketPrice(marketPriceJson);
    const totalUSDPrice = currentMarketValue * totalToken;
    const totalMarketValue = convertToMoney(currentMarketValue * totalToken);
    const votingPowerPercent = convertToMoney((totalToken / bonded) * 100, 2);
    //==========================
    // self-delegations
    //==========================

    let totalSelfDelegations = 0;

    for (let i = 0; i < input.validator_address.length; i++) {
      const totalSelfDelegation = networkFunction?.converter(
        R.pathOr([""], ["result"], delegationsJson)
          .filter((y) =>
            "delegation" in y
              ? y.delegation[input?.address ?? 0] ===
                  input?.validator_address[i] ?? 0
              : y?.[input?.address ?? 0] === input?.validator_address[i] ?? 0
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
      let state = {
        title: input.title,
        denom: input.denom,
        network: input.network,
        totalToken: totalTokenFormat,
        totalUSDPrice,
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
      switch (input.name) {
        case "likecoin":
          setLikecoin(state);
          break;
        case "iov":
          setIOV(state);
          break;
        case "band":
          setBand(state);
          break;
        case "akash":
          setAkash(state);
          break;
        case "emoney":
          setEmoney(state);
          break;
        case "iris":
          setIris(state);
          break;
        default:
          return state;
      }
      // dispatch({
      //   type: input.name,
      //   title: input?.title,
      //   denom: input?.denom,
      //   network: input?.network,
      //   totalToken: totalTokenFormat,
      //   totalUSDPrice,
      //   totalMarketValue,
      //   currentMarketValue,
      //   voting: {
      //     title: "votingPower",
      //     token: totalTokenFormat,
      //     percent: votingPowerPercent,
      //   },
      //   selfDelegations: {
      //     title: "selfDelegations",
      //     token: totalSelfDelegationsFormat,
      //     percent: totalSelfDelegationsPercent,
      //   },
      //   otherDelegations: {
      //     title: "otherDelegations",
      //     token: otherDelegationsFormat,
      //     percent: otherDelegationsPercent,
      //   },
      // });
    } catch (err) {
      console.log(err);
      // dispatch({
      //   type: input.name,
      //   title: input.title ?? null,
      //   totalToken: 0,
      //   totalMarketValue: "0.00",
      //   currentMarketValue: "0.00",
      //   denom: input.denom ?? null,
      //   network: input?.network ?? null,
      //   voting: {
      //     title: "votingPower",
      //     token: 0,
      //     percent: 0,
      //   },
      //   selfDelegations: {
      //     title: "selfDelegations",
      //     token: 0,
      //     percent: 0,
      //   },
      //   otherDelegations: {
      //     title: "otherDelegations",
      //     token: 0,
      //     percent: 0,
      //   },
      // });
      let failedState = {
        title: input.title ?? null,
        totalToken: 0,
        totalMarkefailedStatetValue: "0.00",
        currentMarketValue: "0.00",
        denom: input.denom ?? null,
        network: input?.network ?? null,
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
      };
      switch (input.name) {
        case "likecoin":
          setLikecoin(failedState);
          break;
        case "iov":
          setIOV(failedState);
          break;
        case "band":
          setBand(failedState);
          break;
        case "akash":
          setAkash(failedState);
          break;
        case "emoney":
          setEmoney(failedState);
          break;
        case "iris":
          setIris(failedState);
          break;
        default:
          return failedState;
      }
    }
  };
  //setCosmosNetwork(updatedArr);

  // V System
  const [vsys, setVSYS] = useState({
    title: vsysData[0].title,
    totalToken: 0,
    totalUSDPrice: 0,
    totalMarketValue: 0,
    currentMarketValue: 0,
    denom: vsysData[0].denom,
    network: vsysData[0]?.network,
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
    const totalUSDPrice = currentMarketValue * totalVSYStokens;
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
          totalUSDPrice,
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

  const [usdLoading, setUSDLoading] = useState(true);
  const getNetworkUSD = async () => {
    const network = [
      cosmos,
      terra,
      kava,
      likecoin,
      iov,
      band,
      akash,
      emoney,
      vsys,
    ];
    const totalUSD = network
      .map((x) => x.totalUSDPrice)
      .reduce((a, b) => (a += b));
    const displayUSD = convertToMoney(totalUSD);
    network.map((x) => x.totalUSDPrice).includes(0)
      ? setUSDLoading(true)
      : setUSDLoading(false);
    setNetworkUSD(displayUSD);
  };

  useEffect(() => {
    try {
      // getCosmosNetwork(cosmosData[0]);
      // getCosmosNetwork(cosmosData[1]);
      // getCosmosNetwork(cosmosData[2]);
      getNetwork(cosmosData[0]);
      getNetwork(cosmosData[1]);
      getNetwork(cosmosData[2]);
      getCosmosNetwork(cosmosData[3]);
      getCosmosNetwork(cosmosData[4]);
      getCosmosNetwork(cosmosData[5]);
      getCosmosNetwork(cosmosData[6]);
      getCosmosNetwork(cosmosData[7]);
      getCosmosNetwork(cosmosData[8]);
      getVSYSNetwork();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      getNetworkUSD();
    } catch (err) {
      console.log(err);
    }
  }, [cosmos, terra, kava, likecoin, iov, band, akash, emoney, vsys]);

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
    usdLoading,
  };
};
