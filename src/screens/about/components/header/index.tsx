import React from "react";
import { useTranslation } from "i18n";
import { HeaderCSS } from "./styles";
import { MaxWidthContainerCSS } from "@styles/components";

const Header = () => {
  const { t } = useTranslation("about");
  return (
    <HeaderCSS>
      <MaxWidthContainerCSS>
        <div className="content-container">
          <h2>{t("aboutUs")}</h2>
          <p>{t("heroDetails")}</p>
        </div>
      </MaxWidthContainerCSS>
    </HeaderCSS>
  );
};

export default Header;
