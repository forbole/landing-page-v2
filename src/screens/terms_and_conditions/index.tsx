import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";

const TermsAndConditions = () => {
  const { t } = useTranslation("terms_and_conditions");

  return (
    <Layout title={t("title")} description={t("description")}>
      <h1>{t("title")}</h1>
      <p>{t("updatedDate")}</p>
      <p>{t("description")}</p>
    </Layout>
  );
};

export default TermsAndConditions;
