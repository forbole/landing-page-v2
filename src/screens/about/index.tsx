import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";

const About = () => {
  const { t } = useTranslation("stake_now");
  return (
    <Layout title={t("title")}>
      <h1>About</h1>
    </Layout>
  )
}

export default About;
