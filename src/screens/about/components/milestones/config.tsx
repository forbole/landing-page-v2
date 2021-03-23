export const milestonesData = [
  {
    year: "2017",
    date: "oct2017",
    title: "establishedTitle",
    detail: "establishedDetails",
  },
  {
    year: "2018",
    date: "apr2018",
    title: "validatorDebutTitle",
    detail: "validatorDebutDetails",
    row: true,
  },
  {
    date: "aug2018",
    title: "bigDipperBornTitle",
    detail: "bigDipperBornDetails",
  },
  {
    year: "2019",
    date: "jun2019",
    title: "appWorksTitle",
    detail: "appWorksDetails",
    row: true,
  },
  {
    date: "jul2019",
    title: "inceptionTitle",
    detail: "inceptionDetails",
  },
  {
    year: "2020",
    date: "q42020",
    title: "interchainTitle",
    detail: "interchainDetails",
    row: true,
  },
  {
    date: "jan2020",
    title: "desmosTitle",
    detail: "desmosDetails",
  },
  {
    year: "2021",
    date: "q12021",
    title: "newBDTitle",
    detail: "newBDDetails",
  },
];

export const half = Math.floor(milestonesData.length / 2);
export const milestoneRowOne = milestonesData.slice(0, half);
export const milestoneRowTwo = milestonesData.slice(half);
export const milestoneFormat = [];
export const fetchMileStoneData = () => {
  const results = [];
  for (let i = 0; i <= half; i += 1) {
    if (milestoneRowOne[i]) {
      results.push(milestoneRowOne[i]);
    }
    if (milestoneRowTwo[i]) {
      results.push(milestoneRowTwo[i]);
    }
  }

  return results;
};
