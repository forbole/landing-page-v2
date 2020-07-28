import React from "react";
import { useTranslation } from "i18n";
import { NavBar, Layout } from "@components";
import { NotFoundCSS } from "./styles";

const NotFound = () => {
  const { t } = useTranslation("404");
  return (
    <Layout title="404" footer={false}>
      <NotFoundCSS>
        <img src="images/icons/404_unicorn.svg" />
        <div className="content">
          <h3>{t("title")}</h3>
          <p>{t("content")}</p>
        </div>
      </NotFoundCSS>
    </Layout>
  );
};

export default NotFound;
