import React from "react";
import { useTranslation } from "i18n";
import { HubDetailCSS, StatDetailsCSS } from "./styles";

// finalize once more details are given
const HubDetail = (props: any) => {
  const { title = "", atom = 0, percent = 0 } = props;
  const { t } = useTranslation("stake_now");

  return (
    <HubDetailCSS>
      <p>{t(title)}</p>
      <StatDetailsCSS>
        <p>
          {atom} {t("atom")}
        </p>
        <p>{percent}%</p>
      </StatDetailsCSS>
    </HubDetailCSS>
  );
};

export default HubDetail;
