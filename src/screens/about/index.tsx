import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { AboutHeaderCSS } from "./styles";
import { Header, WhatWeDo, Milestones, TeamMembers } from "./components";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <Layout
      title={t("title")}
      description={t("description")}
      image="/static/images/assets/Facebook-who-we-are.png"
      twitterImage="/static/images/assets/Twitter-who-we-are.png"
    >
      <AboutHeaderCSS>
        <Header />
        <WhatWeDo />
      </AboutHeaderCSS>
      <Milestones />
      <TeamMembers />
      {/* <Team />
      <Opportunities /> */}
    </Layout>
  );
};

export default About;
