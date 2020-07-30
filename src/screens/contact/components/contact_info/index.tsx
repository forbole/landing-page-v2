import React from "react";
import { useTranslation } from "i18n";
import { socialMedias } from "../../config";
import { ContactInfoCSS } from "./styles";
import { Form, Segment } from "semantic-ui-react";
import { Location, Email } from "@icons";

const ContactInfo = () => {
  const { t } = useTranslation("contact");
  return (
    <ContactInfoCSS>
      <Segment raised>
        <h2>{t("contactInfo")}</h2>

        <Location className="location" />
        <p className="address">{t("address")}</p>

        <Email className="email" />
        <p className="emailInfo">{t("contactEmail")}</p>

        <div className="socialMedia">
          {socialMedias.map((x, i) => (
            <a href={x.url} key={i}>
              <x.component />
            </a>
          ))}
        </div>
      </Segment>
    </ContactInfoCSS>
  );
};

export default ContactInfo;
