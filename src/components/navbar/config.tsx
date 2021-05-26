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
    display: "products",
    link: "/products",
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
    display: "careers",
    link: "/careers",
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
