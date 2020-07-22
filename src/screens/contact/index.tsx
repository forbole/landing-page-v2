import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { ContactHeader, ContactMessage } from "./components";
import { ContactPageCSS } from "./styles";

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <Layout title={t("title")}>
      <ContactPageCSS>
        <div className="background">
          <ContactHeader />
          <ContactMessage />
        </div>
      </ContactPageCSS>
    </Layout>
  );
};

export default Contact;
