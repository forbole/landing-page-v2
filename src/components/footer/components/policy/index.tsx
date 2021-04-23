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
        <Link href="/terms-and-conditions">
          <small>{t("tnc")}</small>
        </Link>
        <div className="vhr" />
        <Link href="/privacy-policy">
          <small>{t("privacy")}</small>
        </Link>
      </TermsCSS>
    </PolicyCSS>
  );
};

export default Policy;
