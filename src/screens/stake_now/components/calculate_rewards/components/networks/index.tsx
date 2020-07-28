import React from "react";
import { useTranslation } from "i18n";
import { networkData } from "./config";
import { Button, NetworkChoicesCSS } from "./styles";

const Networks = () => {
  const { t } = useTranslation("stake_now");
  return (
    <div>
      <p className="select-network">{t("selectNetwork")}</p>
      <NetworkChoicesCSS>
        {networkData.map((x) => (
          <Button key={x.name}>
            <img src={x.image} />
            {t(x.name)}
          </Button>
        ))}
      </NetworkChoicesCSS>
    </div>
  );
};

export default Networks;
