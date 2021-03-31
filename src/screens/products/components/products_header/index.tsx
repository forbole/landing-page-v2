import React from "react";
import { useTranslation } from "i18n";
import { MaxWidthContainerCSS } from "@styles/components";
import { ProductBlock } from "./components";
import { ProductsHeaderCSS, ProductsContainerCSS } from "./styles";

const ProductsHeader = () => {
  const { t } = useTranslation("products");
  return (
    <ProductsContainerCSS>
      <ProductsHeaderCSS>
        <MaxWidthContainerCSS className="headerDiv">
          <h1>{t("title")}</h1>
          <p className="headerp">{t("headerDescription")}</p>
        </MaxWidthContainerCSS>
      </ProductsHeaderCSS>
      <ProductBlock />
    </ProductsContainerCSS>
  );
};

export default ProductsHeader;
