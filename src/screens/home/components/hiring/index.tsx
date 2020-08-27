import React from "react";
import { useTranslation } from "i18n";
import { Button } from "semantic-ui-react";
import {
  HiringContentCSS,
  HiringHeaderCSS,
  ContentWrapperCSS,
  NextIconCSS,
} from "./styles";
import { ProgressBar } from "@components";

export const HiringContent = () => {
  const { t } = useTranslation("home");
  return (
    <HiringContentCSS>
      <HiringHeaderCSS>
        <img
          className="overlay"
          src="/static/images/assets/joinUs.png/"
          alt="Join Us"
        />
      </HiringHeaderCSS>
      <ContentWrapperCSS>
        <h1>{t("hiring")}</h1>
        <h2>{t("hiringJobs")}</h2>
        <h3>{t("hiringDescription")}</h3>
        <Button color="red">{t("joinUs")}</Button>
      </ContentWrapperCSS>
      <NextIconCSS>
        {/* <Next /> */}
        <ProgressBar
          progress={100}
          size={50}
          strokeWidth={5}
          circleOneStroke="rgba(255, 255, 255, 0.5)"
          circleTwoStroke="rgba(255, 255, 255, 1)"
        />
      </NextIconCSS>
    </HiringContentCSS>
  );
};

export default HiringContent;
