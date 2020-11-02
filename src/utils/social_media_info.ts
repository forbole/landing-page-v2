import {
  Telegram,
  Facebook,
  Medium,
  Twitter,
  Github,
  YouTube,
  LinkedIn,
} from "@icons";

const socialMedia = {
  telegram: {
    key: "telegram",
    url: "https://t.me/forbole",
    component: Telegram,
  },
  facebook: {
    key: "facebook",
    url: "https://www.facebook.com/Forbole/",
    component: Facebook,
  },
  medium: {
    key: "medium",
    url: "https://medium.com/forbole",
    component: Medium,
  },
  twitter: {
    key: "twitter",
    url: "https://twitter.com/forbole",
    component: Twitter,
  },
  github: {
    key: "github",
    url: "https://github.com/forbole",
    component: Github,
  },
  youtube: {
    key: "youtube",
    url: "https://www.youtube.com/channel/UCgDS_e-jCvHBDOPvuZDWqAg",
    component: YouTube,
  },
  linkedIn: {
    key: "linkedin",
    url: "https://www.linkedin.com/company/forbole/",
    component: LinkedIn,
  },
};

export const getSocialMediaInfo = (key) => {
  return socialMedia[key] ?? {};
};
