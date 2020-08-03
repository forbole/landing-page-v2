import React from "react";
import { useTranslation } from "i18n";
import { StakingCoverCSS } from "./styles";
import { socialMedias } from "./config";

const StakingCover = () => {
  const { t } = useTranslation("staking");
  return (
    <StakingCoverCSS>
      <div className="content-container">
        <h2>{t("stakingYourTokens")}</h2>
        <p>{t("stakingYourTokensDetails")}</p>
        <div className="social-media-container">
          {socialMedias.map((x, i) => (
            <a href={x.url} key={i}>
              {x.component}
            </a>
          ))}
        </div>
      </div>
    </StakingCoverCSS>
  );
};

export default StakingCover;
