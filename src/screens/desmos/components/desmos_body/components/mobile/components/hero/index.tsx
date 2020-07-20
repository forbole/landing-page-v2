import React from "react";
import { DesmosHeader } from "../../../../components";
import { HeroCSS, DesmosLogoCSS } from "./styles";

const Hero = () => {
  return (
    <HeroCSS>
      <DesmosHeader />
      <DesmosLogoCSS src="images/icons/desmos_logo.svg" />
    </HeroCSS>
  );
};

export default Hero;
