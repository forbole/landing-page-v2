import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import {
  Header,
  WhatWeDo,
  Milestones,
  Team,
  Opportunities,
} from "./components";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <Layout title={t("title")}>
      <Header />
      <WhatWeDo />
      <Milestones />
      <Team />
      <Opportunities />
    </Layout>
  );
};

export default About;
