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
import { useForboleStakesHook } from "./hooks";

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");
  const hookProps = useForboleStakesHook();
  const { cosmos } = hookProps;
  const { voting, selfDelegations, otherDelegations } = cosmos;
  return (
    <ForboleStakesCSS>
      <p>{t("tokensStakedWithForbole")}</p>
      {/* fix later */}
      <h1>${convertToMoney(30791930)}</h1>
      <FlexContainerCSS>
        <ChartContainerCSS>
          <Chart {...hookProps} />
        </ChartContainerCSS>
        <StakesDetailsContainerCSS>
          <HubDetail
            main
            denom={cosmos.denom}
            title={cosmos.title}
            atom={cosmos.totalAtom}
            usd={cosmos.totalMarketValue}
            perAtom={cosmos.currentMarketValue}
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={cosmos.denom}
            title={voting.title}
            atom={voting.atom}
            percent={voting.percent}
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={cosmos.denom}
            title={selfDelegations.title}
            atom={selfDelegations.atom}
            percent={selfDelegations.percent}
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={cosmos.denom}
            title={otherDelegations.title}
            atom={otherDelegations.atom}
            percent={otherDelegations.percent}
          />
        </StakesDetailsContainerCSS>
      </FlexContainerCSS>
    </ForboleStakesCSS>
  );
};

export default ForboleStakes;
