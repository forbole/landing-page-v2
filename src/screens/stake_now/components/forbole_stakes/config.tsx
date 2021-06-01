const dataParams = {
  cosmos: {
    totalTokenData: 273460364505181,
    bondedData: 193395019832210,
    selfDelegation: 2414513744704,
  },
  terra: {
    totalTokenData: 982911320980144,
    bondedData: 322848406720639,
    selfDelegation: 2358293157003,
  },
  kava: {
    totalTokenData: 128155373282488,
    bondedData: 74827116718480,
    selfDelegation: 2213097585421,
  },
  cryptoOrg: {
    totalTokenData: 2506933382641597413,
    bondedData: 348954387453015544,
    selfDelegation: 7308504808729876,
  },
  sentinel: {
    totalTokenData: 10288428980216833,
    bondedData: 9167598803417683,
    selfDelegation: 264415829817570,
  },
  ["fetch.ai"]: {
    totalTokenData: 1059406888657601483097496694,
    bondedData: 53388864075675265212893849,
    selfDelegation: 3438006635315918023130450,
  },
  ["regen-network"]: {
    totalTokenData: 102712435328012,
    bondedData: 57978105410921,
    selfDelegation: 2360208138165,
  },
  bitsong: {
    totalTokenData: 106228117674904,
    bondedData: 31303511882895,
    selfDelegation: 4749699284583,
  },
  ["oasis-protocol"]: {
    totalTokenData: 10000000000,
    bondedData: 4545887153.23,
    selfDelegation: 54396365.96,
  },
  kusama: {
    totalTokenData: 10000000,
    bondedData: 4890000,
    selfDelegation: 15526,
  },
  flow: {
    totalTokenData: 1358642702.43160844,
    bondedData: 1238448939.32838964,
    selfDelegation: 27104804.58989077,
  },
  solana: {
    totalTokenData: 496200600,
    bondedData: 335727200,
    selfDelegation: 839318,
  },
};

export const getDataParams = (key) => {
  return dataParams[key] ?? {};
};

export const cosmosData = [
  {
    title: "Cosmos Hub",
    name: "cosmos",
    network: "cosmos",
    denom: "ATOM",
    delegationsApi:
      "https://api.cosmoshub.bigdipper.live/staking/delegators/cosmos14kn0kk33szpwus9nh8n87fjel8djx0y0mmswhp/delegations",
    address: "validator_address",
    delegationsJson_R: ["result"],
    validator_address: ["cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj"],
    color: "#ba3fd9",
  },
  {
    title: "Terra",
    name: "terra",
    network: "terra-money",
    denom: "LUNA",
    address: "delegator_address",
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
    address: "delegator_address",
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
    address: "delegator_address",
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
    address: "delegator_address",
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
    address: "delegator_address",
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
    address: "delegator_address",
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
    address: "delegator_address",
    delegationsApi:
      "http://lcd.emoney.forbole.com/staking/validators/emoneyvaloper1293pqwtzu67zp8txuya4yts03ccw5kgf98hz9y/delegations",
    validator_address: ["emoney1293pqwtzu67zp8txuya4yts03ccw5kgfz83kmf"],
    color: "#1e5877",
  },
  {
    title: "Iris",
    name: "iris",
    network: "iris",
    denom: "IRIS",
    address: "delegator_address",
    delegationsApi:
      "https://lcd.iris.bigdipper.live/staking/validators/iva1msqqkd3v0gmullzwm56c4frevyczzxfeczvjru/delegations",
    delegationsJson_R: ["result"],
    validator_address: ["iaa1msqqkd3v0gmullzwm56c4frevyczzxfednxa7m"],
    color: "#7a41ff",
  },
  {
    title: "Crypto.org",
    name: "cryptoOrg",
    network: "crypto.org",
    denom: "CRO",
  },
  {
    title: "Sentinel",
    name: "sentinel",
    network: "sentinel",
    denom: "DVPN",
  },
  {
    title: "Fetch.ai",
    name: "fetch.ai",
    network: "fetch.ai",
    denom: "FET",
  },
  {
    title: "regen-network",
    name: "regen-network",
    network: "regen-network",
    denom: "REGEN",
  },
  {
    title: "Bitsong",
    name: "bitsong",
    network: "bitsong",
    denom: "BTSG",
  },
  {
    title: "Oasis Protocol",
    name: "oasis-protocol",
    network: "oasis-protocol",
    denom: "ROSE",
  },
  {
    title: "Kusama",
    name: "kusama",
    network: "kusama",
    denom: "KSM",
  },
  {
    title: "Flow",
    name: "flow",
    network: "flow",
    denom: "FLOW",
  },
  {
    title: "Solana",
    name: "solana",
    network: "solana",
    denom: "SOL",
  },
];

export const vsysData = [
  {
    title: "V Systems",
    name: "vsys",
    network: ["v-system"],
    denom: "VSYS",
    address: "delegator_address",
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
