import React from "react";
import { useTranslation } from "i18n";
import Link from "next/link";
import { Go } from "@icons";
import { OpeningCSS } from "./styles";

const Opening = (props: any) => {
  const { t } = useTranslation("about");
  const { title, description, slug } = props;
  return (
    <OpeningCSS>
      <Link href={`/positions/${slug}`}>
        <a>
          <div className="header-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <p className="see-more">
            {t("seeMore")} <Go />
          </p>
        </a>
      </Link>
    </OpeningCSS>
  );
};

export default Opening;
