import React from "react";
import { useTranslation } from "i18n";
import { ContactInfoCSS } from "./styles";

const ContactInfo = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactInfoCSS>
      <h2>{t("contactInfo")}</h2>
      <p>{t("heroDetails")}</p>
    </ContactInfoCSS>
  );
};
