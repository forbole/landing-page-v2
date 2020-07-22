import React from "react";
import { useTranslation } from "i18n";
import { Input } from "semantic-ui-react";
import { SubscribeCSS } from "./styles";

const Subscribe = () => {
  const { t } = useTranslation("footer");
  return (
    <SubscribeCSS>
      <h1>{t("subscribe")}</h1>
      <h2>{t("subscribeDescription")}</h2>
      <Input action={t("subscribe")} placeholder={t("email")} />
    </SubscribeCSS>
  );
};

export default Subscribe;
