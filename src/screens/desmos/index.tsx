import React from "react";
import { useTranslation } from "i18n";
import { theme } from "@styles";
import { Layout } from "@components";
import { DesmosBody, MooncakeBody } from "./components";

const { colors } = theme;

const Desmos = () => {
  const { t } = useTranslation("desmos");

  return (
    <Layout title={t("title")} navColor={colors.gray600}>
      <div>
        <DesmosBody />
        <MooncakeBody />
      </div>
    </Layout>
  );
};

export default Desmos;
