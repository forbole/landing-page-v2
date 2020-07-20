import React from "react";
import { useTranslation } from "i18n";
import { DesmosHeader, DesmosContent } from "../../components";
import { DesmosBodyCSS, DesktopCSS, DesmosBodyContainerCSS } from "./styles";

const Desktop = () => {
  const { t } = useTranslation("desmos");
  return (
    <DesktopCSS>
      <DesmosBodyCSS>
        <h1>what</h1>
        {/* <DesmosBodyContainerCSS> */}
        {/* <DesmosHeader /> */}
        {/* <DesmosContent /> */}
        {/* </DesmosBodyContainerCSS> */}
      </DesmosBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
