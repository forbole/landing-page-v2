import React from "react";
import { useTranslation } from "i18n";
import { HeaderCSS } from "./styles";

const Header = () => {
  const { t } = useTranslation("about");
  return (
    <HeaderCSS>
      <div>
        <div className="content-container">
          <h2>{t("aboutUs")}</h2>
          <p>{t("heroDetails")}</p>
        </div>
        {/* <img
          src="/static/images/assets/about-background.png"
          className="bg-image"
        /> */}
      </div>
    </HeaderCSS>
  );
};

export default Header;
