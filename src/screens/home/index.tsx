import React from "react";
import Head from "next/head";
import {
  HeroContent,
  SupportedNetworks,
  DashboardContent,
  MooncakeBody,
  News,
  HiringContent,
} from "./components";
import { ProgressBar, Layout } from "@components";
import { useTranslation } from "i18n";
import { HomeCSS, CustomContent } from "./styles";
import AwesomeSlider from "react-awesome-slider";
import { useHomeHook } from "./hooks";

const Home = () => {
  const { t } = useTranslation("home");
  const { activeScreen, setActiveScreen, handleActiveScreen } = useHomeHook();
  // console.log(activeScreen);
  return (
    <Layout title={t("home")}>
      <HomeCSS>
        <Head>
          <title>{t("forbole")}</title>
        </Head>
        <AwesomeSlider
          customContent={
            <CustomContent>
              <ProgressBar
                handleAnimation={handleActiveScreen}
                // onclick={}
              />
            </CustomContent>
          }
          buttons={false}
          selected={activeScreen}
        >
          <div>
            <HeroContent />
          </div>
          <div>
            <HiringContent />
          </div>
        </AwesomeSlider>
        <SupportedNetworks />
        <DashboardContent />
        <MooncakeBody />
        <News />
      </HomeCSS>
    </Layout>
  );
};

export default Home;
