/**
 * Takes the key name and returns the location. Will return null if undefined
 */

const logos = {
  cosmos: {
    image: "/static/images/icons/cosmos-hub.png",
    name: "Cosmos Hub",
    key: "cosmos",
    delegate:
      "https://cosmos.bigdipper.live/validators/cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj/delegate",
  },
  iris: {
    image: "/static/images/icons/iris.png",
    name: "IRIS Hub",
    key: "iris",
  },
  ["terra-money"]: {
    image: "/static/images/icons/terra.png",
    name: "Terra Money",
    key: "terra-money",
    delegate:
      "https://app.lunie.io/terra/validators/terravaloper1jkqr2vfg4krfd4zwmsf7elfj07cjuzss30ux8g",
  },
  kava: {
    image: "/static/images/icons/kava.png",
    name: "Kava",
    key: "kava",
    delegate:
      "https://kava.bigdipper.live/validators/kavavaloper14kn0kk33szpwus9nh8n87fjel8djx0y02c7me3/delegate",
  },
  sentinel: {
    image: "/static/images/icons/sentinel.png",
    name: "Sentinel",
    key: "sentinel",
  },
  likecoin: {
    image: "/static/images/icons/likecoin.png",
    name: "LikeCoin",
    key: "likecoin",
    delegate:
      "https://likecoin.bigdipper.live/validator/cosmosvaloper1v8njts96gl5eqstnen4gksdy5k860fau65c3sw/delegate",
  },
  ["regen-network"]: {
    image: "/static/images/icons/regen-network.png",
    name: "Regen Network",
    key: "regen-network",
  },
  ["e-money"]: {
    image: "/static/images/icons/e-money.png",
    name: "e-Money",
    key: "e-money",
    delegate:
      "https://e-money.network/validator/emoneyvaloper1293pqwtzu67zp8txuya4yts03ccw5kgf98hz9y/delegate",
  },
  desmos: {
    image: "/static/images/icons/desmos.png",
    name: "Desmos",
    key: "desmos",
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
  },
  ["oasis-labs"]: {
    image: "/static/images/icons/oasis-labs.png",
    name: "Oasis Labs",
    key: "oasis-labs",
  },
  akash: {
    image: "/static/images/icons/akash.png",
    name: "Akash",
    key: "akash",
    delegate:
      "https://akash.bigdipper.live/validator/akashvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0uzn073/delegate",
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
    delegate:
      "https://band.bigdipper.live/validator/bandvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0wz502z/delegate",
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
  },
  kusama: {
    image: "/static/images/icons/kusama.png",
    name: "Kusama",
    key: "kusama",
    delegate:
      "https://app.lunie.io/kusama/validators/D9rwRxuG8xm8TZf5tgkbPxhhTJK5frCJU9wvp59VRjcMkUf",
  },
  celo: {
    image: "/static/images/icons/celo.png",
    name: "Celo",
    key: "celo",
  },
};

export const getNetworkInfo = (key) => {
  return logos[key] ?? {};
};
