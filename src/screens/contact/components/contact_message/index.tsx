import React from "react";
import { useTranslation } from "i18n";
import { ContactMessageCSS } from "./styles";
import validator from "validator";
import { Button, Form, Segment, Input } from "semantic-ui-react";

import useContactForm from "./hooks";

const ContactMessage = () => {
  const { t } = useTranslation("contact");
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    canSubmit,
  } = useContactForm();

  return (
    <ContactMessageCSS>
      <Form onSubmit={handleSubmit}>
        <Segment raised>
          <h2>{t("formHeading")}</h2>
          <div className="nameField">
            <p>{t("name")}</p>
            <Input
              name="name"
              onChange={handleInputChange}
              value={inputs.name}
              transparent
              placeholder=""
              required
            />
          </div>
          <div className="emailField">
            <p>{t("email")}</p>
            <Input
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              transparent
              placeholder=""
              {...validator.isEmail("foo@bar.com")}
            />
          </div>
          <p className="messages">{t("messages")}</p>
          <Input
            name="message"
            onChange={handleInputChange}
            value={inputs.message}
            transparent
            placeholder=""
            required
          />
          <Button type="submit" disabled={!canSubmit}>
            {t("submit")}
          </Button>
        </Segment>
      </Form>
    </ContactMessageCSS>
  );
};

export default ContactMessage;
