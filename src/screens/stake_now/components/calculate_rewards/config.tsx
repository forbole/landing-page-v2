const stakingParams = {
  akash: { inflation: 0.4865, stakingRatio: 0.8352, commissionRate: 0.15 },
  ["band-protocol"]: {
    inflation: 0.1109,
    stakingRatio: 0.7989,
    commissionRate: 0.12,
  },
  cosmos: { inflation: 0.0705, stakingRatio: 0.7153, commissionRate: 0.095 },
  iris: { inflation: 0.04, stakingRatio: 0.3859, commissionRate: 0.2 },
  kava: { inflation: 0.1508, stakingRatio: 0.5603, commissionRate: 0.15 },
  likecoin: { inflation: 0.0795, stakingRatio: 0.7524, commissionRate: 1 },
  iov: { inflation: 0.1489, stakingRatio: 0.5254, commissionRate: 0.15 },
};

export const getStakingParams = (key) => {
  return stakingParams[key] ?? {};
};
