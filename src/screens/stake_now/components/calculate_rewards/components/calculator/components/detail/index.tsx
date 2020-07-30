import React from "react";
import { useTranslation } from "i18n";
import { DetailCSS } from "./styles";

const Detail = (props: any) => {
  const { title, tokens, amount } = props;
  const { t } = useTranslation("stake_now");

  return (
    <DetailCSS>
      <p>{title}</p>
      <div>
        <p>
          <span className="tokens">{tokens}</span>
          {t("token")}
        </p>
        <p>${amount}</p>
      </div>
    </DetailCSS>
  );
};

export default Detail;
