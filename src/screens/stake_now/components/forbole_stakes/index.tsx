import React from "react";
import { useTranslation } from "i18n";
import { ForboleStakesCSS, StakesDetailsContainerCSS } from "./styles";
import HubDetail from "./components/hub_detail";
import { dummyData } from "./config";

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");

  return (
    <ForboleStakesCSS>
      <p>{t("tokensStakedWithForbole")}</p>
      <p>graph here</p>
      <StakesDetailsContainerCSS>
        {dummyData.details.map((x) => (
          <>
            <hr />
            <HubDetail
              key={x.title}
              title={x.title}
              atom={x.atom}
              percent={x.percent}
            />
          </>
        ))}
      </StakesDetailsContainerCSS>
    </ForboleStakesCSS>
  );
};

export default ForboleStakes;
