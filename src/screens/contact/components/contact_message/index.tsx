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
          <div className="nameField">
            <p>{t("name")}</p>
            <Input transparent placeholder="" />
          </div>
          <div className="emailField">
            <p>{t("email")}</p>
            <Input transparent placeholder="" />
          </div>
          <p className="messages">{t("messages")}</p>
          <Input transparent placeholder="" />
          {Input.length > 0 ? (
            <Button>{t("submit")}</Button>
          ) : (
            <Button disabled>Disabled</Button>
          )}
        </Segment>
      </Form>
    </ContactMessageCSS>
  );
};

export default ContactMessage;
