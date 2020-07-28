import React from "react";
import { useTranslation } from "i18n";
import { ForboleStakesCSS, StakesDetailsContainerCSS } from "./styles";
import HubDetail from "./components/hub_detail";
import Chart from "./components/chart";
import { dummyData } from "./config";
const { cosmos } = dummyData;

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");

  return (
    <ForboleStakesCSS>
      <p>{t("tokensStakedWithForbole")}</p>
      <Chart />
      <StakesDetailsContainerCSS>
        <HubDetail
          main
          title={cosmos.title}
          atom={cosmos.atom}
          usd={cosmos.usd}
          perAtom={cosmos.perAtom}
        />
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
