import React from "react";
import { useTranslation } from "i18n";
import Image from "next/image";
import { ProductDisplayCSS, ProductBlockCSS, CallToActionCSS } from "./styles";
import { Go } from "@icons";
import { productsData } from "./config";

const ProductBlock = (props: any) => {
  const { t } = useTranslation("products");
  return (
    <ProductDisplayCSS>
      {productsData.map((x, i) => (
        <ProductBlockCSS key={i}>
          <div className="image-container">
            <Image src={x.icon} alt={x.name} className="image" layout="fill" />
          </div>
          <h3>{x.name}</h3>
          <p>{x.description}</p>
          <CallToActionCSS>
            {x.link ? (
              <a href={x.link}>
                {t("learnMore")} <Go />
              </a>
            ) : (
              <p>{t("coming")}</p>
            )}
          </CallToActionCSS>
        </ProductBlockCSS>
      ))}
    </ProductDisplayCSS>
  );
};

export default ProductBlock;
