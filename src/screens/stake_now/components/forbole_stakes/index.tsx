import React from "react";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import {
  ForboleStakesCSS,
  CarouselDesktopContainerCSS,
  FlexContainerCSS,
  StakeNowContainerCSS,
} from "./styles";
import { CarouselNetworks } from "./components";
import { useForboleStakesHook } from "./hooks";
import { INetworkDataProps } from "./interfaces";

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
  }: any = hookProps;
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
      </ForboleStakesCSS>
      <FlexContainerCSS>
        <CarouselDesktopContainerCSS>
          <CarouselNetworks network={networkData} />
        </CarouselDesktopContainerCSS>
      </FlexContainerCSS>
    </StakeNowContainerCSS>
  );
};

export default ForboleStakes;
