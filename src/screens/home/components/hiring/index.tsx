import React from "react";
import { useTranslation } from "i18n";
import { Button } from "semantic-ui-react";
import { HiringContentCSS, ContentWrapperCSS } from "./styles";

export const HiringContent = () => {
  const { t } = useTranslation("home");
  return (
    <HiringContentCSS>
      <ContentWrapperCSS>
        <h1>{t("hiring")}</h1>
        <h2>{t("hiringJobs")}</h2>
        <h3>{t("hiringDescription")}</h3>
        <Button color="red">{t("joinUs")}</Button>
      </ContentWrapperCSS>
    </HiringContentCSS>
  );
};

export default HiringContent;
