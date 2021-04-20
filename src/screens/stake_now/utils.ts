import * as R from "ramda";

export const toFixed = (num: number): number => {
  return Number(num?.toFixed(2) ?? "0");
};

export const defaultConverter = (ratio: number) => (num: number) => {
  return num / ratio;
};
export const uAtomToAtom = defaultConverter(1000000);

export const uLunaToLuna = defaultConverter(1000000);

export const uKavaToKava = defaultConverter(1000000);

export const uAktToAkash = defaultConverter(1000000);

export const uBandToBand = defaultConverter(1000000);

export const uIovToIov = defaultConverter(1000000);

export const uEMoneyToEMoney = defaultConverter(1000000);

export const uIrisToIris = defaultConverter(1000000);

export const nanoLikeToLike = defaultConverter(1000000000);

export const defaultFunctions = (converter: any) => ({
  bonded: (data: any) => {
    return converter(Number(R.pathOr(0, ["result", "bonded_tokens"], data)));
  },
  inflation: (data: any) => {
    return toFixed(Number(R.pathOr(0, ["result"], data))) ?? 0;
  },
  supply: (data: any) => {
    return converter(Number(R.pathOr(0, ["result"], data)));
  },
  commissionRate: (data: any) => {
    return Number(
      R.pathOr(0, ["result", "commission", "commission_rates", "rate"], data)
    );
  },
  marketPrice: (data: any) => {
    return toFixed(
      Number(R.pathOr(0, ["market_data", "current_price", "usd"], data))
    );
  },
  converter,
});

const cosmos = R.clone(defaultFunctions(uAtomToAtom));
cosmos.gecko = "https://api.coingecko.com/api/v3/coins/cosmos";

const terra = R.clone(defaultFunctions(uLunaToLuna));
terra.gecko = "https://api.coingecko.com/api/v3/coins/terra-luna";

const kava = R.clone(defaultFunctions(uKavaToKava));
kava.gecko = "https://api.coingecko.com/api/v3/coins/kava";

const akash = R.clone(defaultFunctions(uAktToAkash));
akash.gecko = "https://api.coingecko.com/api/v3/coins/akash-network";

const band = R.clone(defaultFunctions(uBandToBand));
band.gecko = "https://api.coingecko.com/api/v3/coins/band-protocol";

const iov = R.clone(defaultFunctions(uIovToIov));
iov.gecko = "https://api.coingecko.com/api/v3/coins/starname";

const likecoin = R.clone(defaultFunctions(nanoLikeToLike));
likecoin.gecko = "https://api.coingecko.com/api/v3/coins/likecoin";

const vsys = R.clone(defaultFunctions(uBandToBand));
vsys.gecko = "https://api.coingecko.com/api/v3/coins/v-systems";

const emoney = R.clone(defaultFunctions(uBandToBand));
emoney.gecko = "https://api.coingecko.com/api/v3/coins/iris-network";

const solana = R.clone(defaultFunctions(uAtomToAtom));
solana.gecko = "https://api.coingecko.com/api/v3/coins/solana";

// const iris: any = {
//   bonded: (data: any) => {
//     return Number(R.pathOr(0, ["bonded_tokens"], data));
//   },
//   inflation: (data: any) => {
//     const [inflationData] = data?.filter(
//       (x) => x?.type === "irishub/mint/Params"
//     );
//     return (
//       toFixed(Number(R.pathOr(0, ["value", "inflation"], inflationData))) ?? 0
//     );
//   },
//   supply: (data: any) => {
//     const [supply] = R.pathOr([], ["total_supply"], data).filter(
//       (x) => x.denom === "iris-atto"
//     );
//     return uIrisToIris(Number(R.pathOr(0, ["amount"], supply)));
//   },
//   commissionRate: (data: any) => {
//     return Number(R.pathOr(0, ["commission", "rate"], data));
//   },
//   marketPrice: (data: any) => {
//     return toFixed(
//       Number(R.pathOr(0, ["market_data", "current_price", "usd"], data))
//     );
//   },
// };

const iris = R.clone(defaultFunctions(uIrisToIris));
iris.gecko = "https://api.coingecko.com/api/v3/coins/iris-network";

// available networks for calculations
export const networkFunctions = {
  cosmos,
  kava,
  akash,
  terra,
  iov,
  likecoin,
  iris,
  band,
  emoney,
  vsys,
  solana,
  ["band-protocol"]: band,
};
