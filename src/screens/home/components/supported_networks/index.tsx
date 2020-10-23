import React from "react";
import { useTranslation } from "i18n";
import { AnimatedNetwork } from "@components";
import { networkKeys } from "./config";
import { getNetworkInfo } from "@utils/network-info";
import {
  SupportedNetworksCSS,
  HeaderContentCSS,
  NetworkListCSS,
} from "./styles";

const SupportedNetworks = () => {
  const { t } = useTranslation("home");
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  return (
    <SupportedNetworksCSS>
      <HeaderContentCSS>
        <h2>{t("supportedNetworks")}</h2>
        <p>{t("placeholder")}</p>
      </HeaderContentCSS>
      <NetworkListCSS>
        {networkData.map((x) => (
          <AnimatedNetwork
            key={x.name}
            name={x?.name}
            image={x?.image}
            amount={x?.amount}
            delegate={x?.delegate}
          />
        ))}
      </NetworkListCSS>
    </SupportedNetworksCSS>
  );
};

export default SupportedNetworks;
