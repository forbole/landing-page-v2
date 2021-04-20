import React from "react";
import { useTranslation } from "i18n";
import { MaxWidthContainerCSS } from "@styles/components";
import { ProductDisplayCSS, ProductBlockCSS, CallToActionCSS } from "./styles";
import { Go } from "@icons";
import { productsData } from "./config";

const ProductBlock = (props: any) => {
  const { t } = useTranslation("products");
  return (
    <MaxWidthContainerCSS>
      <ProductDisplayCSS>
        {productsData.map((x, i) => (
          <ProductBlockCSS key={i}>
            <img src={x.icon} alt={x.name} />
            <h3>{x.name}</h3>
            <p>{x.description}</p>
            <CallToActionCSS>
              {x.link ? (
                <a href={x.link}>
                  {t("explorer")} <Go />
                </a>
              ) : (
                <p>{t("coming")}</p>
              )}
            </CallToActionCSS>
          </ProductBlockCSS>
        ))}
      </ProductDisplayCSS>
    </MaxWidthContainerCSS>
  );
};

export default ProductBlock;
