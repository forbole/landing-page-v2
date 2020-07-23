import React from "react";
import { useTranslation } from "i18n";
import { ContactInfoCSS } from "./styles";
import { Button, Form, Segment, Input } from "semantic-ui-react";

const ContactInfo = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactInfoCSS>
      <Segment raised>
        <h2>{t("contactInfo")}</h2>
        <p>{t("name")}</p>
        <Input transparent placeholder="" />
        <p>{t("email")}</p>
        <Input transparent placeholder="" />
        <p className="messages">{t("messages")}</p>
        <Input transparent placeholder="" />
        <Button>{t("submit")}</Button>
      </Segment>
    </ContactInfoCSS>
  );
};

export default ContactInfo;
