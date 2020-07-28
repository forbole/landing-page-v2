import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { ForboleStakes } from "./components";

const StakeNow = () => {
  const { t } = useTranslation("stake_now");

  return (
    <Layout title={t("title")}>
      <ForboleStakes />
    </Layout>
  );
};

export default StakeNow;
