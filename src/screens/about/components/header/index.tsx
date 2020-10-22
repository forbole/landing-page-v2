import React from "react";
import { useTranslation } from "i18n";
import { HeaderCSS } from "./styles";

const Header = () => {
  const { t } = useTranslation("about");
  return (
    <HeaderCSS>
      <div className="content-container">
        <h2>
          {t("build")} <div className="circle" /> {t("secure")}{" "}
          <div className="circle" /> {t("stake")}
        </h2>
        <p>{t("heroDetails")}</p>
      </div>
      <div className="background-image-container">
        <img src="/static/images/assets/about.svg" className="bg-image" />
      </div>
    </HeaderCSS>
  );
};

export default Header;
