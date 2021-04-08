import * as R from "ramda";

/**
 * Takes the key name and returns the location. Will return null if undefined
 */

const logos = {
  cosmos: {
    image: "/static/images/icons/cosmos-hub.png",
    name: "Cosmos Hub",
    key: "cosmos",
    bigDipper: "https://cosmos.bigdipper.live/",
    delegate:
      "https://cosmos.bigdipper.live/validators/cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj/delegate",
    heightSocket: "wss://ws.cosmoshub.forbole.com",
    calculator: {
      bonded: "http://lcd.cosmoshub.bigdipper.live/staking/pool",
      inflation: "http://lcd.cosmoshub.bigdipper.live/minting/inflation",
      supply: "http://lcd.cosmoshub.bigdipper.live/supply/total/uatom",
      stakingParams:
        "http://lcd.cosmoshub.bigdipper.live/staking/validators/cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj",
    },
  },
  iris: {
    image: "/static/images/icons/iris.png",
    name: "IRIS Hub",
    key: "iris",
    bigDipper: "https://iris.bigdipper.live/",
    delegate:
      "https://iris.bigdipper.live/validators/iva1msqqkd3v0gmullzwm56c4frevyczzxfeczvjru/delegate",
    heightSocket: "wss://ws.iris.forbole.com",
    calculator: {
      bonded: "http://lcd.iris.forbole.com/stake/pool",
      inflation: "http://lcd.iris.forbole.com/params",
      supply: "http://lcd.iris.forbole.com/bank/token-stats",
      stakingParams:
        "http://lcd.iris.forbole.com/stake/validators/iva1msqqkd3v0gmullzwm56c4frevyczzxfeczvjru",
    },
  },
  ["terra-money"]: {
    image: "/static/images/icons/terra.png",
    name: "Terra Money",
    key: "terra-money",
    delegate:
      "https://app.lunie.io/terra/validators/terravaloper1jkqr2vfg4krfd4zwmsf7elfj07cjuzss30ux8g",
    heightSocket: "wss://ws.terra.forbole.com",
    calculator: {
      bonded: "https://lcd.terra.bigdipper.live/staking/pool",
      // inflation: "https://lcd.terra.bigdipper.live/minting/inflation",
      supply: "https://lcd.terra.bigdipper.live/supply/total/uluna",
      stakingParams:
        "https://lcd.terra.bigdipper.live/staking/validators/terravaloper1jkqr2vfg4krfd4zwmsf7elfj07cjuzss30ux8g",
    },
  },
  kava: {
    image: "/static/images/icons/kava.png",
    name: "Kava",
    key: "kava",
    bigDipper: "https://kava.bigdipper.live/",
    delegate:
      "https://kava.bigdipper.live/validators/kavavaloper14kn0kk33szpwus9nh8n87fjel8djx0y02c7me3/delegate",
    heightSocket: "wss://ws.kava.forbole.com",
    calculator: {
      bonded: "http://lcd.kava.forbole.com/staking/pool",
      inflation: "http://lcd.kava.forbole.com/minting/inflation",
      supply: "http://lcd.kava.forbole.com/supply/total/ukava",
      stakingParams:
        "http://lcd.kava.forbole.com/staking/validators/kavavaloper14kn0kk33szpwus9nh8n87fjel8djx0y02c7me3",
    },
  },
  sentinel: {
    image: "/static/images/icons/sentinel.png",
    name: "Sentinel",
    key: "sentinel",
    bigDipper: "https://explorer.sentinel.co/",
  },
  likecoin: {
    image: "/static/images/icons/likecoin.png",
    name: "LikeCoin",
    key: "likecoin",
    bigDipper: "http://likecoin.bigdipper.live/",
    delegate:
      "https://likecoin.bigdipper.live/validator/cosmosvaloper1v8njts96gl5eqstnen4gksdy5k860fau65c3sw/delegate",
    heightSocket: "wss://ws.likecoin.forbole.com",
    calculator: {
      bonded: "http://lcd.likecoin.forbole.com/staking/pool",
      inflation: "http://lcd.likecoin.forbole.com/minting/inflation",
      supply: "http://lcd.likecoin.forbole.com/supply/total/nanolike",
      stakingParams:
        "http://lcd.likecoin.forbole.com/staking/validators/cosmosvaloper1v8njts96gl5eqstnen4gksdy5k860fau65c3sw",
    },
  },
  ["regen-network"]: {
    image: "/static/images/icons/regen-network.png",
    name: "Regen Network",
    key: "regen-network",
    bigDipper: "https://explorer.regen.vitwit.com/",
  },
  ["e-money"]: {
    image: "/static/images/icons/e-money.png",
    name: "e-Money",
    key: "e-money",
    bigDipper: "https://e-money.network/",
    delegate:
      "https://e-money.network/validator/emoneyvaloper1293pqwtzu67zp8txuya4yts03ccw5kgf98hz9y/delegate",
    heightSocket: "wss://ws.emoney.forbole.com",
    calculator: {
      bonded: "http://lcd.emoney.forbole.com/staking/pool",
      inflation: "http://lcd.emoney.forbole.com/minting/inflation",
      supply: "http://lcd.emoney.forbole.com/supply/total/nanolike",
      stakingParams:
        "http://lcd.emoney.forbole.com/staking/validators/emoneyvaloper1293pqwtzu67zp8txuya4yts03ccw5kgf98hz9y",
    },
  },
  desmos: {
    image: "/static/images/icons/desmos.png",
    name: "Desmos",
    key: "desmos",
    bigDipper: "https://morpheus.desmos.network/",
  },
  cyberd: {
    image: "/static/images/icons/sentinel.png",
    name: "Cyberd",
    key: "cyberd",
  },
  iov: {
    image: "/static/images/icons/iov.png",
    name: "Iov",
    key: "iov",
    delegate:
      "https://big-dipper.iov-mainnet-2.iov.one/validator/starvaloper1jkv2qkpq6cfplx6put7f00wzuyds57fnmtgde0/delegate",
    heightSocket: "wss://ws.iov.forbole.com",
    calculator: {
      bonded: "http://lcd.iov.forbole.com/staking/pool",
      inflation: "http://lcd.iov.forbole.com/minting/inflation",
      supply: "http://lcd.iov.forbole.com/supply/total/uiov",
      stakingParams:
        "http://lcd.iov.forbole.com/staking/validators/starvaloper1jkv2qkpq6cfplx6put7f00wzuyds57fnmtgde0",
    },
  },
  ["oasis-protocol"]: {
    image: "/static/images/icons/oasis-protocol.png",
    name: "Oasis protocol",
    key: "oasis-protocol",
  },
  akash: {
    image: "/static/images/icons/akash.png",
    name: "Akash",
    key: "akash",
    delegate:
      "https://akash.bigdipper.live/validator/akashvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0uzn073/delegate",
    heightSocket: "wss://ws.akash.forbole.com",
    calculator: {
      bonded: "http://lcd.akash.forbole.com/staking/pool",
      inflation: "http://lcd.akash.forbole.com/minting/inflation",
      supply: "http://lcd.akash.forbole.com/supply/total/uakt",
      stakingParams:
        "http://lcd.akash.forbole.com/staking/validators/akashvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0uzn073",
    },
  },
  bitsongs: {
    image: "/static/images/icons/bitsongs.png",
    name: "BitSongs",
    key: "bitsongs",
  },
  ["band-protocol"]: {
    image: "/static/images/icons/band-protocol.png",
    name: "Band Protocol",
    key: "band-protocol",
    heightSocket: "wss://ws.band.forbole.com",
    delegate:
      "https://band.bigdipper.live/validator/bandvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0wz502z/delegate",
    calculator: {
      bonded: "http://lcd.band.forbole.com/staking/pool",
      inflation: "http://lcd.band.forbole.com/minting/inflation",
      supply: "http://lcd.band.forbole.com/supply/total/uband",
      stakingParams:
        "http://lcd.band.forbole.com/staking/validators/bandvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0wz502z",
    },
  },
  solana: {
    image: "/static/images/icons/solana.png",
    name: "Solana",
    key: "solana",
  },
  ["v-system"]: {
    image: "/static/images/icons/v-system.png",
    name: "V-System",
    key: "v-system",
  },
  polkadot: {
    image: "/static/images/icons/polkadot.png",
    name: "Polkadot",
    key: "polkadot",
    delegate:
      "https://app.lunie.io/polkadot/validators/12L5PhJ2CT4MujSXoHTsBRZHQym4e6WYRhpAkgNWSwAnjZTf",
    heightSocket: "wss://rpc.polkadot.io/",
  },
  kusama: {
    image: "/static/images/icons/kusama.png",
    name: "Kusama",
    key: "kusama",
    delegate:
      "https://app.lunie.io/kusama/validators/D9rwRxuG8xm8TZf5tgkbPxhhTJK5frCJU9wvp59VRjcMkUf",
    heightSocket: "wss://kusama-rpc.polkadot.io/",
  },
  celo: {
    image: "/static/images/icons/celo.png",
    name: "Celo",
    key: "celo",
  },
  agoric: {
    image: "/static/images/icons/agoric.png",
    name: "Agoric",
    key: "agoric",
  },
  flow: {
    image: "/static/images/icons/flow.png",
    name: "Flow",
    key: "flow",
  },
  ["persistence-one"]: {
    image: "/static/images/icons/persistence-one.png",
    name: "Persistence One",
    key: "persistence-one",
  },
  sharering: {
    image: "/static/images/icons/sharering.png",
    name: "Sharering",
    key: "sharering",
  },
  ["fetch.ai"]: {
    image: "/static/images/icons/fetch-ai.png",
    name: "Fetch.ai",
    key: "fetch-ai",
  },
};

export const getNetworkInfo = (key) => {
  return logos[key] ?? {};
};

export const getNewHeight = (e: any) => {
  const message = JSON.parse(e.data);
  const newHeight = R.pathOr(
    "---",
    ["result", "data", "value", "block", "header", "height"],
    message
  );
  return newHeight;
};

export const getPolkadotNewHeight = (e: any) => {
  const message = JSON.parse(e.data);
  let newHeight = R.pathOr("---", ["params", "result", "number"], message);

  if (newHeight !== "---") {
    newHeight = Number(newHeight);
  }
  return newHeight;
};

export const HEIGHT_QUERY =
  '{"jsonrpc": "2.0","method": "subscribe","id":"0","params":{"query":"tm.event=\'NewBlock\'"}}';

export const POLKADOT_HEIGHT_QUERY =
  '{"jsonrpc": "2.0","method": "chain_subscribeAllHeads","id":"0","params":[]}';

export const VOTE_HEIGHT_QUERY =
  '{"jsonrpc": "2.0","id": "1", "method": "getVoteAccounts"}';
