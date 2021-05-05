import React from "react";
import { useTranslation } from "i18n";
import { AnimatedNetwork } from "@components";
import { networkKeys } from "./config";
import { getNetworkInfo } from "@src/utils/network_info";
import {
  SupportedNetworksCSS,
  HeaderContentCSS,
  NetworkListCSS,
} from "./styles";
// import { useSupportedNetworkHook } from "./hooks";

const SupportedNetworks = () => {
  const { t } = useTranslation("home");
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  // const { state } = useSupportedNetworkHook();

  return (
    <SupportedNetworksCSS>
      <HeaderContentCSS>
        <h2>{t("supportedNetworks")}</h2>
        <p>{t("supportedNetworksDescription")}</p>
      </HeaderContentCSS>
      <NetworkListCSS>
        {networkData.map((x) => (
          <AnimatedNetwork
            key={x.key}
            name={x?.name}
            image={x?.image}
            disable={x?.disable}
            // amount={state[x.key]}
            delegate={x?.delegate}
          />
        ))}
      </NetworkListCSS>
    </SupportedNetworksCSS>
  );
};

export default SupportedNetworks;
