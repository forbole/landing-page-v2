import React from "react";
import { SocialMediaCSS } from "./styles";
import { socialMediaInfo } from "./config";

const SocialMedia = () => {
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
