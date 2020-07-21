import React from "react";
import SocialMedia from "../social_media";
import Subscribe from "../subscribe";
import Forbole from "../forbole";
import FooterItems from "../footer_items";
import { MobileFooterCSS } from "./styles";

const MobileFooter = () => {
  return (
    <MobileFooterCSS>
      <Forbole />
      <FooterItems />
      <Subscribe />
      <SocialMedia />
    </MobileFooterCSS>
  );
};

export default MobileFooter;
