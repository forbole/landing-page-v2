import React from "react";
import { useTranslation } from "i18n";
import { Input } from "semantic-ui-react";
import { SubscribeCSS } from "./styles";
import { useSubscribeHook } from "./hooks";

const Subscribe = () => {
  const { t } = useTranslation("footer");
  const { email, handleChange, handleSubmit } = useSubscribeHook(t);
  return (
    <SubscribeCSS>
      <h1>{t("subscribe")}</h1>
      <h2>{t("subscribeDescription")}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={t("email")}
          value={email}
          onChange={handleChange}
          action={{
            content: t("subscribe"),
            onClick: handleSubmit,
          }}
        />
      </form>
    </SubscribeCSS>
  );
};

export default Subscribe;
