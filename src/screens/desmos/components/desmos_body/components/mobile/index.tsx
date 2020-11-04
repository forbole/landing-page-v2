import React from "react";
import { useTranslation } from "i18n";
import DesmosHeader from "../desmos_header";
import Body from "../desmos_content";
import { MobileCSS, DesmosLogoCSS, HeroCSS } from "./styles";

export const Mobile = () => {
  const { t } = useTranslation("desmos");
  return (
    <MobileCSS>
      <HeroCSS>
        <div className="content-container">
          <DesmosHeader />
          <a
            href="https://www.desmos.network/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="visit-website">{t("visitWebsite")} &#x2192;</p>
          </a>
        </div>
        <DesmosLogoCSS src="/static/images/icons/desmos-logo.svg" />
      </HeroCSS>
      <Body />
    </MobileCSS>
  );
};

export default Mobile;
