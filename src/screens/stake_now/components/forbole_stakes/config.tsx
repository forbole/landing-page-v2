export const cosmosData = [
  {
    title: "Cosmos",
    name: "cosmos",
    network: "cosmos",
    denom: "ATOM",
    delegationsApi:
      "http://lcd.cosmoshub.bigdipper.live/staking/delegators/cosmos14kn0kk33szpwus9nh8n87fjel8djx0y0mmswhp/delegations",
    x: "validator_address",
    delegationsJson_R: ["result"],
    validator_address: ["cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj"],
    color: "#ba3fd9",
  },
  {
    title: "Terra",
    name: "terra",
    network: "terra-money",
    denom: "LUNA",
    x: "delegator_address",
    delegationsApi:
      "https://lcd.terra.bigdipper.live/staking/validators/terravaloper1jkqr2vfg4krfd4zwmsf7elfj07cjuzss30ux8g/delegations",
    delegationsJson_R: ["result"],
    validator_address: ["terra1jkqr2vfg4krfd4zwmsf7elfj07cjuzss3qsmhm"],
    color: "#2845AE",
  },
  {
    title: "Kava",
    name: "kava",
    network: "kava",
    denom: "KAVA",
    x: "delegator_address",
    delegationsApi:
      "http://lcd.kava.forbole.com/staking/validators/kavavaloper14kn0kk33szpwus9nh8n87fjel8djx0y02c7me3/delegations",
    validator_address: [
      "kava1axa2p2klp4er2z0a29msplf9mtmq7ven0hkqw3",
      "kava14kn0kk33szpwus9nh8n87fjel8djx0y08wynpx",
    ],
    color: "#ff564f",
  },
  {
    title: "Likecoin",
    name: "likecoin",
    network: "likecoin",
    denom: "LIKE",
    x: "delegator_address",
    delegationsApi:
      "http://lcd.likecoin.forbole.com/staking/validators/cosmosvaloper1v8njts96gl5eqstnen4gksdy5k860fau65c3sw/delegations",
    validator_address: ["cosmos1v8njts96gl5eqstnen4gksdy5k860faulqvyua"],
    color: "#28646e",
  },
  {
    title: "Starname",
    name: "iov",
    network: "iov",
    denom: "IOV",
    x: "delegator_address",
    delegationsApi:
      "http://lcd.iov.forbole.com/staking/validators/starvaloper1jkv2qkpq6cfplx6put7f00wzuyds57fnmtgde0/delegations",
    validator_address: [
      "star1jkv2qkpq6cfplx6put7f00wzuyds57fn7qva4x",
      "star1j02u9tpjtse9fyd398xvsdfn6caw7ju9xfqa3z",
    ],
    color: "#6610f2",
  },
  {
    title: "Band-Protocol",
    name: "band",
    network: "band-protocol",
    denom: "BAND",
    x: "delegator_address",
    delegationsApi:
      "http://lcd.band.forbole.com/staking/validators/bandvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0wz502z/delegations",
    validator_address: ["band14kn0kk33szpwus9nh8n87fjel8djx0y0z5sv0f"],
    color: "#516FFA",
  },
  {
    title: "Akash",
    name: "akash",
    network: "akash",
    denom: "AKT",
    x: "delegator_address",
    delegationsApi:
      "http://lcd.akash.forbole.com/staking/validators/akashvaloper14kn0kk33szpwus9nh8n87fjel8djx0y0uzn073/delegations",
    validator_address: [
      "akash14kn0kk33szpwus9nh8n87fjel8djx0y0kqafwm",
      "akash1axa2p2klp4er2z0a29msplf9mtmq7ven7e06pv",
      "akash1scc089xs8m67e34pt837z3je8m7950rvkzz88g",
      "akash1scc089xs8m67e34pt837z3je8m7950rvkzz88g",
      "akash1d3925a6vx08htfyzwf6al8xeq07a8re7zscprk",
    ],
    color: "#eb3825",
  },
  {
    title: "E-Money",
    name: "emoney",
    network: "e-money",
    denom: "NGM",
    x: "delegator_address",
    delegationsApi:
      "http://lcd.emoney.forbole.com/staking/validators/emoneyvaloper1293pqwtzu67zp8txuya4yts03ccw5kgf98hz9y/delegations",
    validator_address: ["emoney1293pqwtzu67zp8txuya4yts03ccw5kgfz83kmf"],
    color: "#1e5877",
  },
];

export const irisData = [
  {
    title: "Iris",
    name: "iris",
    network: "iris",
    denom: "IRIS",
    x: "delegator_addr",
    delegationsApi:
      "http://lcd.iris.bigdipper.live/stake/validators/iva1msqqkd3v0gmullzwm56c4frevyczzxfeczvjru/delegations",
    delegationsJson_R: ["result"],
    validator_address: ["iaa1msqqkd3v0gmullzwm56c4frevyczzxfednxa7m"],
    color: "#7a41ff",
  },
];

export const vsysData = [
  {
    title: "V Systems",
    name: "vsys",
    network: "vsys",
    denom: "VSYS",
    x: "delegator_address",
    bondedApi: "https://api.vsys.forbole.com/consensus/allSlotsInfo",
    selfSelegationsApi:
      "https://api.vsys.forbole.com/addresses/balance/details/AR6AnRmynHBchobnxTr8rUvZyYEPNFsBBqE",
    tokensApi: "https://api.vsys.forbole.com/consensus/slotInfo/32",
    color: "#ff8836",
  },
];

export const dummyData = {
  stakeAmount: 1298873168,
  cosmos: {
    title: "cosmosHub",
    token: 311266,
    usd: 1562345,
    perToken: 4.58,
  },
  details: [
    {
      title: "votingPower",
      token: 32545,
      percent: 1.84,
    },
    {
      title: "selfDelegations",
      token: 32577,
      percent: 0.95,
    },
    {
      title: "otherDelegations",
      token: 3245,
      percent: 0.95,
    },
  ],
};
