/**
 * Takes the key name and returns the location. Will return null if undefined
 */

const logos = {
  cosmos: {
    image: "/static/images/icons/cosmos-hub.png",
    name: "Cosmos Hub",
    key: "cosmos",
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
  },
  kava: {
    image: "/static/images/icons/kava.png",
    name: "Kava",
    key: "kava",
  },
  sentinel: {
    image: "/static/images/icons/sentinel.png",
    name: "Sentinel",
    key: "sentinel",
  },
  likechain: {
    image: "/static/images/icons/likecoin.png",
    name: "LikeChain",
    key: "likechain",
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
  },
  kusama: {
    image: "/static/images/icons/kusama.png",
    name: "Kusama",
    key: "kusama",
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
