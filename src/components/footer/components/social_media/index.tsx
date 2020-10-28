import React from "react";
import { SocialMediaCSS } from "./styles";
import { socialKeys } from "./config";
import { getSocialMediaInfo } from "@utils/social_media_info";

const SocialMedia = () => {
  const socialMediaInfo = socialKeys.map((x) => getSocialMediaInfo(x));

  return (
    <SocialMediaCSS>
      {socialMediaInfo.map((x) => {
        return (
          <a key={x.key} href={x.url} target="_blank" rel="noreferrer">
            <x.component />
          </a>
        );
      })}
    </SocialMediaCSS>
  );
};

export default SocialMedia;
