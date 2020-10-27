import React from "react";
import { useTranslation } from "i18n";
import { TermsOfService, AnimatedNetwork } from "@components";
import { getNetworkInfo } from "@utils/network-info";
import { networkKeys } from "../../config";
import {
  SupportedNetworksCSS,
  HeaderContentCSS,
  NetworkListCSS,
} from "./styles";

const SupportedNetworks = () => {
  const { t } = useTranslation("stake_now");
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  return (
    <SupportedNetworksCSS>
      <HeaderContentCSS>
        <h2>{t("supportedNetworks")}</h2>
        <p>{t("supportedNeworksContent")}</p>
        <TermsOfService
          trigger={<p className="terms">{t("termsOfService")}</p>}
        />
      </HeaderContentCSS>
      <NetworkListCSS>
        {networkData.map((x) => (
          <AnimatedNetwork
            key={x.name}
            name={x.name}
            image={x.image}
            amount={x.amount}
          />
        ))}
      </NetworkListCSS>
    </SupportedNetworksCSS>
  );
};

export default SupportedNetworks;
