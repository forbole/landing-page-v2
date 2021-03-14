import React from "react";
import Head from "next/head";
import { HeroContent, SupportedNetworks, News } from "./components";
import { Layout } from "@components";
import { useTranslation } from "i18n";
import { HomeCSS, HeroCSS } from "./styles";

const Home = (props: any) => {
  const { posts } = props;
  const { t } = useTranslation("home");
  return (
    <Layout
      title={t("forbole")}
      description={t("description")}
      image="/static/images/assets/Facebook-Forbole.png"
      twitterImage="/static/images/assets/Twitter-Forbole.png"
    >
      <HomeCSS>
        <Head>
          <title>{t("forbole")}</title>
        </Head>
        <HeroCSS>
          <div className="slider-wrapper">
            <HeroContent />
          </div>
        </HeroCSS>
        <SupportedNetworks />
        {!!posts.length && <News posts={posts} />}
      </HomeCSS>
    </Layout>
  );
};

export default Home;
