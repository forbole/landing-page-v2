export const navItems = [
  {
    display: "home",
    link: "/",
  },
  {
    display: "stakeNow",
    link: "/stake-now",
  },
  {
    display: "staking",
    link: "/staking",
  },
  {
    display: "products",
    link: "/products",
  },
  {
    display: "desmos",
    link: "/desmos",
  },
  {
    display: "blog",
    link: "/blog",
  },
  {
    display: "about",
    link: "/about",
  },
  {
    display: "team",
    link: "/team",
  },
  {
    display: "contact",
    link: "/contact",
  },
];

export const mapLanguages = {
  en: "English",
  // zht: "中文",
};

const languageKeys = Object.keys(mapLanguages);

export const availableLanguages = languageKeys.map((x) => ({
  key: x,
  display: mapLanguages[x],
}));
