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

export const defaultFunctions = {
  bonded: (data: any) => {
    return uAtomToAtom(Number(R.pathOr(0, ["result", "bonded_tokens"], data)));
  },
  inflation: (data: any) => {
    return toFixed(Number(R.pathOr(0, ["result"], data))) ?? 0;
  },
  supply: (data: any) => {
    return uAtomToAtom(Number(R.pathOr(0, ["result"], data)));
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
};

const cosmos = R.clone(defaultFunctions);
cosmos.gecko = "https://api.coingecko.com/api/v3/coins/cosmos";

const terra = R.clone(defaultFunctions);
terra.gecko = "https://api.coingecko.com/api/v3/coins/terra-luna";

const kava = R.clone(defaultFunctions);
kava.gecko = "https://api.coingecko.com/api/v3/coins/kava";

export const networkFunctions = {
  cosmos,
  kava,
  ["terra-money"]: terra,
};
