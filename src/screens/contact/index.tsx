import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { ContactHeader, ContactMessage, ContactInfo } from "./components";
import { ContactPageCSS } from "./styles";
import { theme } from "@styles";
const { colors } = theme;

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <Layout
      title={t("title")}
      description={t("description")}
      image="/static/images/assets/Facebook-Contact-us.png"
      twitterImage="/static/images/assets/Twitter-Contact-us.png"
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
    >
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
