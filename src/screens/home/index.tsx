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

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <Layout title={t("home")}>
      <HomeCSS>
        <Head>
          <title>{t("forbole")}</title>
        </Head>
        {/* <HeroContent /> */}
        <HiringContent />
        <SupportedNetworks />
        <DashboardContent />
        <MooncakeBody />
        <News />
      </HomeCSS>
    </Layout>
  );
};

export default Home;
