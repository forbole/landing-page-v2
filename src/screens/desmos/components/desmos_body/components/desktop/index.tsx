import React from "react";
import { Button } from "semantic-ui-react";
import { useTranslation } from "i18n";
import { DesmosHeader, DesmosContent } from "../../components";
import {
  DesmosBodyCSS,
  DesktopCSS,
  DesmosBodyContainerCSS,
  DesmosLogoCSS,
} from "./styles";

const Desktop = () => {
  const { t } = useTranslation("desmos");
  return (
    <DesktopCSS>
      <DesmosBodyCSS>
        <DesmosBodyContainerCSS>
          <DesmosHeader />
          <DesmosContent />
          <a href="#">
            <Button title={t("visitWebsite")}>{t("visitWebsite")}</Button>
          </a>
          <DesmosLogoCSS src="images/icons/desmos_logo.svg" />
        </DesmosBodyContainerCSS>
      </DesmosBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
