import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { DesmosBody, MooncakeBody } from "./components";
import { DesmosPageCSS } from "./styles";

const Desmos = () => {
  const { t } = useTranslation("desmos");

  return (
    <Layout title={t("title")}>
      <DesmosPageCSS>
        <DesmosBody />
        <MooncakeBody />
      </DesmosPageCSS>
    </Layout>
  );
};

export default Desmos;
