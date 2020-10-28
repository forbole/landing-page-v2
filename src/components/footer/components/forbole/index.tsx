import React from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { ForboleCSS } from "./styles";

const Forbole = () => {
  const { t } = useTranslation("footer");
  return (
    <ForboleCSS>
      <Link href="/">
        <a>
          <img
            src="/static/images/icons/forbole-logo-white.svg"
            alt="forbole footer logo"
          ></img>
          <p>{t("logoCaption")}</p>
        </a>
      </Link>
    </ForboleCSS>
  );
};
export default Forbole;
