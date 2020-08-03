export const milestonesData = [
  {
    date: "oct2017",
    title: "establishedTitle",
    detail: "establishedDetails",
  },
  {
    date: "apr2018",
    title: "validatorPresenceTitle",
    detail: "validatorPresenceDetails",
  },
  {
    date: "jul2018",
    title: "cosmosMentionedTitle",
    detail: "cosmosMentionedDetails",
  },
  {
    date: "aug2018",
    title: "hackAtomTitle",
    detail: "hackAtomDetails",
    badge: true,
  },
  {
    date: "feb2019",
    title: "topScorerTitle",
    detail: "topScorerDetails",
    badge: true,
  },
  {
    date: "feb2019",
    title: "gameOfStakesTitle",
    detail: "gameOfStakesDetails",
    badge: true,
  },
  {
    date: "jun2019",
    title: "appworksTitle",
    detail: "appworksDetails",
  },
  {
    date: "jul2019",
    title: "cosmosHackAtomTitle",
    detail: "cosmosHackAtomDetails",
    badge: true,
  },
  {
    date: "aug2019",
    title: "icfGranteeTitle",
    detail: "icfGranteeDetails",
  },
  {
    date: "dec2019",
    title: "foundingChallengeTitle",
    detail: "foundingChallengeDetails",
    badge: true,
  },
  {
    date: "jan2020",
    title: "desmosTestnetTitle",
    detail: "desmosTestnetDetails",
  },
  {
    date: "feb2020",
    title: "launchMooncakeTitle",
    detail: "launchMooncakeDetails",
  },
];

export const half = Math.floor(milestonesData.length / 2);
export const milestoneRowOne = milestonesData.slice(0, half);
export const milestoneRowTwo = milestonesData.slice(half);
