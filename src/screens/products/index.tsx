import React from "react";
import { useTranslation } from "i18n";
import { theme } from "@styles";
import { Layout } from "@components";
import { ProductsHeader, BigDipper } from "./components";

const { colors } = theme;

const Products = () => {
  const { t } = useTranslation("products");
  return (
    <Layout
      title={t("title")}
      description={t("description")}
      navColor={colors.gray600}
      mobileNavColor={colors.gray600}
      image="/static/images/assets/Facebook-Desmos.png"
      twitterImage="/static/images/assets/Twitter-Desmos.png"
    >
      <ProductsHeader />
      <BigDipper />
    </Layout>
  );
};

export default Products;
