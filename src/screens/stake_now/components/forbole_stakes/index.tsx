import React from "react";
import { useTranslation } from "i18n";
import { config } from "react-spring";
import ReactLoading from "react-loading";
import AnimatedNumber from "react-animated-numbers";
import {
  ForboleStakesCSS,
  CarouselDesktopContainerCSS,
  FlexContainerCSS,
  StakeNowContainerCSS,
} from "./styles";
import { moneyToInt } from "@utils/convert_to_money";
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
    cryptoOrg,
    sentinel,
    fetchAI,
    regen,
    bitsong,
    oasis,
    kusama,
    flow,
    solana,
    usdLoading,
    totalUSD,
  }: any = hookProps;
  const networkData: INetworkDataProps[] = [
    { network: cosmos, icon: "cosmos-hub.png" },
    { network: terra, icon: "terra.png" },
    { network: kava, icon: "kava.png" },
    { network: likecoin, icon: "likecoin.png" },
    { network: iov, icon: "iov.png" },
    { network: band, icon: "band-protocol.png" },
    { network: akash, icon: "akash.png" },
    { network: emoney, icon: "e-money.png" },
    { network: iris, icon: "iris.png" },
    { network: vsys, icon: "v-system.png" },
    { network: cryptoOrg, icon: "crypto-org.svg" },
    { network: sentinel, icon: "sentinel.png" },
    { network: fetchAI, icon: "fetch-ai.png" },
    { network: regen, icon: "regen-network.png" },
    { network: bitsong, icon: "bitsong.png" },
    { network: oasis, icon: "oasis-protocol.png" },
    { network: kusama, icon: "kusama.png" },
    { network: flow, icon: "flow.png" },
    { network: solana, icon: "solana.png" },
  ];
  return (
    <StakeNowContainerCSS>
      <ForboleStakesCSS>
        <p>{t("tokensStakedWithForbole")}</p>
        {totalUSD == 0 ? (
          <ReactLoading
            type={"bars"}
            color={"#FFF"}
            height={"5%"}
            width={"5%"}
          />
        ) : (
          <>
            <h1>
              $
              <AnimatedNumber
                animateToNumber={moneyToInt(totalUSD)}
                includeComma
                config={config.stiff}
                animationType={"random"}
              />
            </h1>
            {!!(usdLoading === true) && (
              <ReactLoading
                type={"bars"}
                color={"#FFF"}
                height={"5%"}
                width={"5%"}
              />
            )}
          </>
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
