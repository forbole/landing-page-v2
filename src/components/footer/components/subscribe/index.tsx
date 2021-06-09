import React from "react";
import { useTranslation } from "i18n";
import { Button } from "semantic-ui-react";
import { SubscribeCSS } from "./styles";

const Subscribe = () => {
  const { t } = useTranslation("footer");
  return (
    <SubscribeCSS>
      <h1>{t("subscribe")}</h1>
      <h2>{t("subscribeDescription")}</h2>
      <a href="http://eepurl.com/dAvhZf">
        <Button content={t("subscribe")} />
      </a>
    </SubscribeCSS>
  );
};

export default Subscribe;
