import React from "react";
import { useTranslation } from "i18n";
import { ContactMessageCSS } from "./styles";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Input,
} from "semantic-ui-react";

const ContactMessage = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactMessageCSS>
      <Form>
        <Segment raised>
          <h2>{t("formHeading")}</h2>
          <p>{t("name")}</p>
          <Input transparent placeholder="" />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="#">Sign Up</a>
      </Message>
    </ContactMessageCSS>
  );
};

export default ContactMessage;
