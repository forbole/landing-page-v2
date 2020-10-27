import * as R from "ramda";

export const toFixed = (num: number): number => {
  return Number(num?.toFixed(2) ?? "0");
};

export const uAtomToAtom = (num: number) => {
  return num / 1000000;
};

export const cosmos = {
  gecko: "https://api.coingecko.com/api/v3/coins/cosmos",
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
};

export const networkFunctions = {
  cosmos,
};
