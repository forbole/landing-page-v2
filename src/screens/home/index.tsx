import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout, SampleButton, Telegram } from "@components";
import { useTranslation } from "i18n";
import { HomeCSS } from "./styles";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <Layout title="Forbole">
      <HomeCSS>
        <Head>
          <title>Forbole</title>
        </Head>
        <Telegram />
        <div className="hero">
          <SampleButton />
          <h1>Co-Building Interchain</h1>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
        </div>

        <div className="container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, in.
          </p>
          <p>{t("placeholder")}</p>
        </div>
      </HomeCSS>
    </Layout>
  );
};

export default Home;
