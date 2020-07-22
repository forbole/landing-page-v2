import React from "react";
import { useTranslation } from "i18n";
import { ContactHeaderCSS } from "./styles";

const ContactHeader = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactHeaderCSS>
      <h2>{t("heading")}</h2>
      <p>{t("heroDetails")}</p>
    </ContactHeaderCSS>
  );
};

export default ContactHeader;
