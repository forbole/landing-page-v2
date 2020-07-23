import React from "react";
import { useTranslation } from "i18n";
import { ContactInfoCSS } from "./styles";
import { Button, Form, Segment, Input } from "semantic-ui-react";
import { Location, Email } from "@icons";
import {
  Telegram,
  Facebook,
  Medium,
  Twitter,
  Github,
  LinkedIn,
  YouTube,
} from "@icons";

const ContactInfo = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactInfoCSS>
      <Form>
        <Segment raised>
          <h2>{t("contactInfo")}</h2>
          <Location className="location" />
          <p className="address">{t("address")}</p>
          <Email className="email" />
          <p className="emailInfo">{t("contactEmail")}</p>
          <div className="socialMedia">
            <a href="#">
              <Telegram />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Medium />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <YouTube />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Github />
            </a>
          </div>
        </Segment>
      </Form>
    </ContactInfoCSS>
  );
};

export default ContactInfo;
