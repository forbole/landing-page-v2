import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { Header, WhatWeDo } from "./components";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <Layout title={t("title")}>
      <Header />
      <WhatWeDo />
    </Layout>
  );
};

export default About;
