import React from "react";
import { useTranslation } from "i18n";
import { ContactMessageCSS } from "./styles";
import { Button, Form, Segment, Input } from "semantic-ui-react";

const ContactMessage = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactMessageCSS>
      <Form>
        <Segment raised>
          <h2>{t("formHeading")}</h2>
          <p>{t("name")}</p>
          <Input transparent placeholder="" />
          <p>{t("email")}</p>
          <Input transparent placeholder="" />
          <p className="messages">{t("messages")}</p>
          <Input transparent placeholder="" />
          <Button>{t("submit")}</Button>
        </Segment>
      </Form>
    </ContactMessageCSS>
  );
};

export default ContactMessage;
