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
import { INetworkDataProps } from "./interfaces";
import ClipLoader from "react-spinners/ClipLoader";

const ForboleStakes = () => {
  const { t } = useTranslation("stake_now");
  const hookProps = useForboleStakesHook();
  const {
    cosmosNetwork,
    iris,
    vsys,
    totalUSD,
    selected,
    isLoading,
  } = hookProps;
  const selectedData: INetworkDataProps[] = [
    { network: cosmosNetwork, icon: "cosmos-hub" },
    { network: cosmosNetwork, icon: "terra" },
    { network: cosmosNetwork, icon: "kava" },
    { network: cosmosNetwork, icon: "likecoin" },
    { network: cosmosNetwork, icon: "iov" },
    { network: cosmosNetwork, icon: "band-protocol" },
    { network: cosmosNetwork, icon: "akash" },
    { network: cosmosNetwork, icon: "e-money" },
    { network: iris, icon: "iris" },
    { network: vsys, icon: "v-system" },
  ];
  return (
    <ForboleStakesCSS>
      <p>{t("tokensStakedWithForbole")}</p>
      {isLoading ? (
        <ClipLoader color="rgba(255, 255, 255)" size={50} />
      ) : (
        <h1>${convertToMoney(totalUSD)}</h1>
      )}
      <FlexContainerCSS>
        <ChartContainerCSS>
          <Chart {...hookProps} />
        </ChartContainerCSS>
        <StakesDetailsContainerCSS>
          <HubDetail
            main
            name={selectedData[selected]?.icon}
            denom={
              selected >= 8
                ? selectedData[selected]?.network?.denom
                : selectedData[selected]?.network[selected]?.denom
            }
            title={
              selected >= 8
                ? selectedData[selected]?.network[selected]?.title
                : selectedData[selected]?.network?.title
            }
            // title={cosmos.title}
            token={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={25} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.totalToken
              ) : (
                selectedData[selected]?.network[selected]?.totalToken
              )
            }
            usd={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={15} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.totalMarketValue
              ) : (
                selectedData[selected]?.network[selected]?.totalMarketValue
              )
            }
            perToken={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.currentMarketValue
              ) : (
                selectedData[selected]?.network[selected]?.currentMarketValue
              )
            }
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={
              selected >= 8
                ? selectedData[selected]?.network?.denom
                : selectedData[selected]?.network[selected]?.denom
            }
            title={
              selected >= 8
                ? selectedData[selected]?.network?.voting.title
                : selectedData[selected]?.network[selected]?.voting.title
            }
            token={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.voting.token
              ) : (
                selectedData[selected]?.network[selected]?.voting.token
              )
            }
            percent={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.voting.percent
              ) : (
                selectedData[selected]?.network[selected]?.voting.percent
              )
            }
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={
              selected >= 8
                ? selectedData[selected]?.network?.denom
                : selectedData[selected]?.network[selected]?.denom
            }
            title={
              selected >= 8
                ? selectedData[selected]?.network?.selfDelegations.title
                : selectedData[selected]?.network[selected]?.selfDelegations
                    .title
            }
            token={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.selfDelegations.token
              ) : (
                selectedData[selected]?.network[selected]?.selfDelegations.token
              )
            }
            percent={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.selfDelegations.percent
              ) : (
                selectedData[selected]?.network[selected]?.selfDelegations
                  .percent
              )
            }
          />
          <hr className="stats-hr" />
          <HubDetail
            denom={
              selected >= 8
                ? selectedData[selected]?.network?.denom
                : selectedData[selected]?.network[selected]?.denom
            }
            title={
              selected >= 8
                ? selectedData[selected]?.network?.otherDelegations.title
                : selectedData[selected]?.network[selected]?.otherDelegations
                    .title
            }
            token={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.otherDelegations.token
              ) : (
                selectedData[selected]?.network[selected]?.otherDelegations
                  .token
              )
            }
            percent={
              isLoading ? (
                <ClipLoader color="rgba(255, 255, 255)" size={10} />
              ) : selected >= 8 ? (
                selectedData[selected]?.network?.otherDelegations.percent
              ) : (
                selectedData[selected]?.network[selected]?.otherDelegations
                  .percent
              )
            }
          />
        </StakesDetailsContainerCSS>
      </FlexContainerCSS>
    </ForboleStakesCSS>
  );
};

export default ForboleStakes;
