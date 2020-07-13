import Link from "next/link";
import Layout from "@components/Layout";
import Head from "next/head";
import { useTranslation } from "../i18n";

const IndexPage = () => {
  const { t } = useTranslation("home");
  return (
    <Layout title="Forbole">
      <div>
        <Head>
          <title>Forbole</title>
        </Head>
        <div className="hero">
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
      </div>
    </Layout>
  );
};

export default IndexPage;
