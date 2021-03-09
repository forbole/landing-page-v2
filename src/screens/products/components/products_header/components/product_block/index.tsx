import React from "react";
import { useTranslation } from "i18n";
import { ProductDisplayCSS, ProductBlockCSS } from "./styles";
import { Go } from "@icons";
import { productsData } from "./config";

const ProductBlock = (props: any) => {
  const { t } = useTranslation("products");
  return (
    <ProductDisplayCSS>
      {productsData.map((x, i) => (
        <ProductBlockCSS key={i}>
          <img src={x.icon} alt={x.name} />
          <h3>{x.name}</h3>
          <p>{x.description}</p>
          <a>
            {t("explorer")} <Go />
          </a>
        </ProductBlockCSS>
      ))}
    </ProductDisplayCSS>
  );
};

export default ProductBlock;
