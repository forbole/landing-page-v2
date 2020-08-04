import React from "react";
import { useTranslation } from "i18n";
import { Go } from "@icons";
import { OpeningCSS } from "./styles";

const Opening = (props: any) => {
  const { t } = useTranslation("about");
  const { title, description } = props;
  return (
    <OpeningCSS>
      <div className="header-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <p className="see-more">
        {t("seeMore")} <Go />
      </p>
    </OpeningCSS>
  );
};

export default Opening;
