import React from "react";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import {
  ForboleStakesCSS,
  StakesDetailsContainerCSS,
  ChartContainerCSS,
  CarouselDesktopContainerCSS,
  FlexContainerCSS,
  StakeNowContainerCSS,
} from "./styles";
import HubDetail from "./components/hub_detail";
import CarouselNetworks from "./components/desktop";
import Chart from "./components/chart";
import { useForboleStakesHook } from "./hooks";
import { INetworkDataProps } from "./interfaces";
import { Loader } from "semantic-ui-react";

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");
  const hookProps = useForboleStakesHook();
  const {
    cosmos,
    terra,
    kava,
    likecoin,
    iov,
    band,
    akash,
    emoney,
    iris,
    vsys,
    totalUSD,
    selected,
  }: // isLoading,
  any = hookProps;
  const networkData: INetworkDataProps[] = [
    { network: cosmos, icon: "cosmos-hub" },
    { network: terra, icon: "terra" },
    { network: kava, icon: "kava" },
    { network: likecoin, icon: "likecoin" },
    { network: iov, icon: "iov" },
    { network: band, icon: "band-protocol" },
    { network: akash, icon: "akash" },
    { network: emoney, icon: "e-money" },
    { network: iris, icon: "iris" },
    { network: vsys, icon: "v-system" },
  ];
  return (
    <StakeNowContainerCSS>
      <ForboleStakesCSS>
        <p>{t("tokensStakedWithForbole")}</p>
        {isNaN(totalUSD) ? (
          <h1>${" " + "---"}</h1>
        ) : (
          <h1>${convertToMoney(totalUSD)}</h1>
        )}

        {/* <ChartContainerCSS>
          <Chart {...hookProps} />
        </ChartContainerCSS>
        <StakesDetailsContainerCSS> */}
        {/* <HubDetail
            main
            name={selectedData[selected]?.icon}
            denom={selectedData[selected]?.network?.denom}
            title={selectedData[selected]?.network?.title}
            token={selectedData[selected]?.network?.totalToken}
            usd={selectedData[selected]?.network?.totalMarketValue}
            perToken={selectedData[selected]?.network?.currentMarketValue}
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={selectedData[selected]?.network?.denom}
            title={selectedData[selected]?.network?.voting.title}
            token={selectedData[selected]?.network?.voting.token}
            percent={selectedData[selected]?.network?.voting.percent}
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={selectedData[selected]?.network?.denom}
            title={selectedData[selected]?.network?.selfDelegations.title}
            token={selectedData[selected]?.network?.selfDelegations.token}
            percent={selectedData[selected]?.network?.selfDelegations.percent}
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={selectedData[selected]?.network?.denom}
            title={selectedData[selected]?.network?.otherDelegations.title}
            token={selectedData[selected]?.network?.otherDelegations.token}
            percent={selectedData[selected]?.network?.otherDelegations.percent}
          /> */}
      </ForboleStakesCSS>
      <FlexContainerCSS>
        <CarouselDesktopContainerCSS>
          <CarouselNetworks network={networkData} />
        </CarouselDesktopContainerCSS>
        {/* </StakesDetailsContainerCSS> */}
      </FlexContainerCSS>
    </StakeNowContainerCSS>
  );
};

export default ForboleStakes;
