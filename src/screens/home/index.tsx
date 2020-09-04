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
import { Layout } from "@components";
import { useTranslation } from "i18n";
import { HomeCSS } from "./styles";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <Layout title={t("home")}>
      <HomeCSS>
        <Head>
          <title>{t("forbole")}</title>
        </Head>
        {/* <AwesomeSlider>
          <div>
            <HeroContent />
          </div>
          <div>
            <HiringContent />
          </div>
        </AwesomeSlider> */}
        <AutoplaySlider
          play={false}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={8000}
          buttons={false}
        >
          <div className="hero-slider">
            <HeroContent />
          </div>
          <div>
            <HiringContent />
          </div>
        </AutoplaySlider>
        <SupportedNetworks />
        <DashboardContent />
        <MooncakeBody />
        <News />
      </HomeCSS>
    </Layout>
  );
};

export default Home;
