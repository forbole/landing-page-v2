import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { Hero, Body } from "./components";

const Desmos = () => {
  const { t } = useTranslation("desmos");

  return (
    <Layout title={t("title")}>
      <Hero />
      <Body />
    </Layout>
  );
};

export default Desmos;
