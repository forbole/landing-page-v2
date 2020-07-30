import React from "react";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import {
  ForboleStakesCSS,
  StakesDetailsContainerCSS,
  ChartContainerCSS,
  FlexContainerCSS,
} from "./styles";
import HubDetail from "./components/hub_detail";
import Chart from "./components/chart";
import { dummyData } from "./config";
const { cosmos } = dummyData;

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");

  return (
    <ForboleStakesCSS>
      <p>{t("tokensStakedWithForbole")}</p>
      <h1>${convertToMoney(dummyData.stakeAmount)}</h1>
      <FlexContainerCSS>
        <ChartContainerCSS>
          <Chart />
        </ChartContainerCSS>
        <StakesDetailsContainerCSS>
          <HubDetail
            main
            title={cosmos.title}
            atom={cosmos.atom}
            usd={cosmos.usd}
            perAtom={cosmos.perAtom}
          />
          {dummyData.details.map((x) => (
            <React.Fragment key={x.title}>
              <hr className="stats-hr" />
              <HubDetail title={x.title} atom={x.atom} percent={x.percent} />
            </React.Fragment>
          ))}
        </StakesDetailsContainerCSS>
      </FlexContainerCSS>
    </ForboleStakesCSS>
  );
};

export default ForboleStakes;
