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

const Home = (props: any) => {
  const { posts } = props;
  const { t } = useTranslation("home");
  const { activeScreen, handleActiveScreen } = useHomeHook();
  return (
    <Layout title={t("home")}>
      <HomeCSS>
        <Head>
          <title>{t("forbole")}</title>
        </Head>
        <AwesomeSlider
          customContent={
            <CustomContent>
              <ProgressBar handleAnimation={handleActiveScreen} />
            </CustomContent>
          }
          buttons={false}
          selected={activeScreen}
        >
          <div className="slider-wrapper">
            <HeroContent />
          </div>
          <div className="slider-wrapper">
            <HiringContent />
          </div>
        </AwesomeSlider>
        <SupportedNetworks />
        <DashboardContent />
        <MooncakeBody />
        {!!posts.length && <News posts={posts} />}
      </HomeCSS>
    </Layout>
  );
};

export default Home;
