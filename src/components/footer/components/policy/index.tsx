import React from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { PolicyCSS, TermsCSS } from "./styles";

const Policy = () => {
  const { t } = useTranslation("footer");
  return (
    <PolicyCSS>
      <small>{t("copyright")}</small>
      <TermsCSS>
        <small>{t("tnc")}</small>
        <hr />
        <small>{t("privacy")}</small>
      </TermsCSS>
    </PolicyCSS>
  );
};

export default Policy;
