import React from "react";
import SocialMedia from "../social_media";
import Subscribe from "../subscribe";
import Forbole from "../forbole";
import FooterItems from "../footer_items";
import Policy from "../policy";
import { DesktopFooterCSS, ContentFooterCSS } from "./styles";

const DesktopFooter = () => {
  return (
    <DesktopFooterCSS>
      <ContentFooterCSS>
        <div className="wrapper">
          <div className="desktopFooter-left">
            <Forbole />
            <SocialMedia />
          </div>
          <FooterItems />
          <Subscribe />
        </div>
      </ContentFooterCSS>
      <hr className="hr" />
      <Policy />
    </DesktopFooterCSS>
  );
};

export default DesktopFooter;
