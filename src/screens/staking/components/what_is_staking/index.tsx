import React from "react";
import { useTranslation } from "i18n";
import {
  WhatIsStakingCSS,
  SingleContentCSS,
  FeatureItemCSS,
  MainContentContainerCSS,
} from "./styles";
import { features } from "./config";

const WhatIsStaking = () => {
  const { t } = useTranslation("staking");

  return (
    <WhatIsStakingCSS>
      <MainContentContainerCSS>
        <SingleContentCSS>
          <h3>{t("whatIsStaking")}</h3>
          <p>{t("whatIsStakingDetailsOne")}</p>
          <p>{t("whatIsStakingDetailsTwo")}</p>
        </SingleContentCSS>
        <SingleContentCSS>
          <h3>{t("aboutPOS")}</h3>
          <p>{t("aboutPOSDetailsOne")}</p>
          <p>{t("aboutPOSDetailsTwo")}</p>
          <ul>
            {features.map((x) => (
              <FeatureItemCSS key={x.title}>
                <p className="feature-title">{t(x.title)}</p>
                <p>{t(x.detail)}</p>
              </FeatureItemCSS>
            ))}
          </ul>
          <p>{t("aboutPOSDetailsThree")}</p>
        </SingleContentCSS>
      </MainContentContainerCSS>
    </WhatIsStakingCSS>
  );
};

export default WhatIsStaking;
