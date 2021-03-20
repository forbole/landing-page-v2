import React from "react";
import { useTranslation } from "i18n";
import { MaxWidthContainerCSS } from "@styles/components";
import { ProductBlock } from "./components";
import { ProductsHeaderCSS } from "./styles";

const ProductsHeader = () => {
  const { t } = useTranslation("products");
  return (
    <>
      <ProductsHeaderCSS>
        <MaxWidthContainerCSS className="headerDiv">
          <h1>{t("title")}</h1>
          <p className="headerp">{t("headerDescription")}</p>
        </MaxWidthContainerCSS>
      </ProductsHeaderCSS>
      <ProductBlock />
    </>
  );
};

export default ProductsHeader;
