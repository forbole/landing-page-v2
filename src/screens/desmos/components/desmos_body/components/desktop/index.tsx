import React from "react";
import { useTranslation } from "i18n";
import { DesmosHeader, DesmosContent } from "../../components";
import { DesmosBodyCSS, DesktopCSS } from "./styles";

const Desktop = () => {
  const { t } = useTranslation("desmos");
  return (
    <DesktopCSS>
      <DesmosBodyCSS>
        <DesmosHeader />
        <DesmosContent />
      </DesmosBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
