import React from "react";
import { useTranslation } from "i18n";
import { ForboleStakesCSS } from "./styles";
import HubDetail from "./components/hub_detail";
import { dummyData } from "./config";

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");

  return (
    <ForboleStakesCSS>
      <p>{t("tokensStakedWithForbole")}</p>
      <p>graph here</p>
      <div>
        {dummyData.details.map((x) => (
          <HubDetail
            key={x.title}
            title={t(x.title)}
            atom={x.atom}
            percent={x.percent}
          />
        ))}
      </div>
    </ForboleStakesCSS>
  );
};

export default ForboleStakes;
