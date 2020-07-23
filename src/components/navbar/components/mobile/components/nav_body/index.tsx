import React from "react";
import Link from "next/link";
import { useTransition } from "react-spring";
import { useTranslation, i18n } from "i18n";
import { Facebook } from "@icons";
import { navItems, availableLanguages } from "@src/components/navbar/config";
import { useShowAvailableLanguages } from "@src/components/navbar/hooks";
import { INavBar } from "../../interfaces";
import { NavBodyCSS, LanguageContainerCSS } from "./styles";
import { Language as LanguageIcon } from "@icons";

const NavBody = (props: INavBar) => {
  const { isOpen } = props;
  const { showLanguage, toggleShowLanguage } = useShowAvailableLanguages();
  const { t } = useTranslation("nav");
  const currentLanguage: string = i18n.language || "en";

  const transitions: any = useTransition(showLanguage, null, {
    enter: (item) => async (next: any, cancel: any) => {
      await next({ display: "block" });
      await next({ opacity: "1" });
      await next({ maxHeight: "500px" });
    },
    leave: (item: any) => async (next: any, cancel: any) => {
      await next({ maxHeight: "0" });
      await next({ opacity: "0" });
      await next({ display: "none" });
    },
    from: {
      opacity: "0",
    },
  });

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
            <LanguageIcon />
            {t("language")}
          </div>
          <div className="select-language">
            {t(currentLanguage)}
            <span onClick={toggleShowLanguage}>
              <Facebook />
            </span>
          </div>
        </li>
        {transitions.map(
          ({ item, key, props }: any) =>
            item && (
              <LanguageContainerCSS style={props} key={key}>
                {availableLanguages.map((x) => (
                  <li key={x}>{t(x)}</li>
                ))}
              </LanguageContainerCSS>
            )
        )}
      </ul>
    </NavBodyCSS>
  );
};

export default NavBody;
