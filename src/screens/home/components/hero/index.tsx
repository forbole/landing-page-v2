import React, { useState } from "react";
import { useTranslation } from "i18n";
import {
  HeroContentCSS,
  MainContentCSS,
  HomeIconsCSS,
  NextIconCSS,
} from "./styles";
import { Secure, Trusted, Reliable, Reward, Next } from "@icons";
import { ProgressBar } from "@components";

export const HeroContent = () => {
  const { t } = useTranslation("home");
  const [progress, setProgress] = useState(0);
  const updatePercentage = () => {
    setTimeout(() => {
      setProgress(progress + 10);
    }, 5);
    return progress;
  };
  // console.log(updatePercentage);
  // console.log(progress);
  // console.log(setProgress);
  // setInterval(() => {
  //   if (progress < 100) {
  //     setProgress(progress + 5);
  //   }
  // }, 1000);
  // const randomProgressValue = () => {
  //   const progressValue = Math.floor(Math.random() * 101);
  //   setProgress(progressValue);
  // };
  return (
    <HeroContentCSS>
      <div className="wrapper">
        <MainContentCSS>
          <h1>{t("coBuildingInterchain")}</h1>
          <p>{t("homeDescription")}</p>
        </MainContentCSS>
        <HomeIconsCSS>
          <div className="icon">
            <Secure />
            {t("secure")}
          </div>
          <div className="icon">
            <Trusted />
            {t("trusted")}
          </div>
          <div className="icon">
            <Reliable />
            {t("reliable")}
          </div>
          <div className="icon">
            <Reward />
            {t("rewards")}
          </div>
        </HomeIconsCSS>
      </div>
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
    </HeroContentCSS>
  );
};

export default HeroContent;
