import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { Hero, Body, DesmosBody } from "./components";

const Desmos = () => {
  const { t } = useTranslation("desmos");

  return (
    <Layout title={t("title")}>
      <DesmosBody />
      <Body />
    </Layout>
  );
};

export default Desmos;
