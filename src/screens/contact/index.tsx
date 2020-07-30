import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { ContactHeader, ContactMessage, ContactInfo } from "./components";
import { ContactPageCSS } from "./styles";

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <Layout title={t("title")}>
      <ContactPageCSS>
        <ContactHeader />
        <div className="wrapper">
          <div className="left">
            <ContactMessage />
          </div>
          <div className="right">
            <ContactInfo />
          </div>
        </div>
      </ContactPageCSS>
    </Layout>
  );
};

export default Contact;
