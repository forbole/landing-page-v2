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
          <a
            href="https://www.desmos.network/"
            target="_blank"
            rel="noreferrer"
          >
            <Button title={t("visitWebsite")}>{t("visitWebsite")}</Button>
          </a>
          <DesmosLogoCSS src="/static/images/icons/desmos-logo.svg" />
        </DesmosBodyContainerCSS>
      </DesmosBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
