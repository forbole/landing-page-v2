import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { Header } from "./components";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <Layout title={t("title")}>
      <Header />
    </Layout>
  );
};

export default About;
