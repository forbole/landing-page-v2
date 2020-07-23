import React from "react";
import Link from "next/link";
import { useTranslation, i18n } from "i18n";
import { Github, Facebook } from "@icons";
import { navItems } from "@src/components/navbar/config";
import { INavBar } from "../../interfaces";
import { NavBodyCSS } from "./styles";

const NavBody = (props: INavBar) => {
  const { isOpen } = props;
  const { t } = useTranslation("nav");
  const currentLanguage: string = i18n.language || "en";
  return (
    <NavBodyCSS>
      <ul>
        {navItems.map((x) => (
          <Link key={x.display} href={x.link}>
            <a>
              <li>{t(x.display)}</li>
            </a>
          </Link>
        ))}
        <hr />
        <li className="space-between">
          <div className="language-globe">
            <Github />
            {t("language")}
          </div>
          <div className="select-language">
            {t(currentLanguage)}
            <Facebook />
          </div>
        </li>
      </ul>
    </NavBodyCSS>
  );
};

export default NavBody;
