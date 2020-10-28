import React from "react";
import { useTranslation } from "i18n";
import { StakingCoverCSS } from "./styles";
import { socialKeys } from "./config";
import { getSocialMediaInfo } from "@utils/social_media_info";

const StakingCover = () => {
  const { t } = useTranslation("staking");
  const socialMedias = socialKeys.map((x) => getSocialMediaInfo(x));

  return (
    <StakingCoverCSS>
      <div className="content-container">
        <h2>{t("stakingYourTokens")}</h2>
        <p>{t("stakingYourTokensDetails")}</p>
        <div className="social-media-container">
          {socialMedias.map((x, i) => (
            <a href={x.url} key={x.key} target="_blank" rel="noreferrer">
              <x.component />
            </a>
          ))}
        </div>
      </div>
    </StakingCoverCSS>
  );
};

export default StakingCover;
