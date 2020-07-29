import React from "react";
import { useTranslation } from "i18n";
import { ContactMessageCSS } from "./styles";
import { Button, Form, Segment, Input } from "semantic-ui-react";

import useContactForm from "./hooks";

const ContactMessage = () => {
  const { t } = useTranslation("contact");
  const { inputs, handleInputChange, handleSubmit } = useContactForm();
  console.log(Input.length);
  return (
    <ContactMessageCSS>
      <Form onSubmit={handleSubmit}>
        <Segment raised>
          <h2>{t("formHeading")}</h2>
          <div className="nameField">
            <p>{t("name")}</p>
            <Input
              onChange={handleInputChange}
              value={inputs.Name}
              transparent
              placeholder=""
              required
            />
          </div>
          <div className="emailField">
            <p>{t("email")}</p>
            <Input transparent placeholder="" />
          </div>
          <p className="messages">{t("messages")}</p>
          <Input
            onChange={handleInputChange}
            value={inputs.Message}
            transparent
            placeholder=""
            required
          />
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
