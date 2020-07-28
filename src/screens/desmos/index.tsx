import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { DesmosBody, MooncakeBody } from "./components";

const Desmos = () => {
  const { t } = useTranslation("desmos");

  return (
    <Layout title={t("title")}>
      <div>
        <DesmosBody />
        <MooncakeBody />
      </div>
    </Layout>
  );
};

export default Desmos;
