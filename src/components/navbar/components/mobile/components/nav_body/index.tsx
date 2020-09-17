import React from "react";
import Link from "next/link";
import { useTranslation, i18n } from "i18n";
import {
  navItems,
  availableLanguages,
  mapLanguages,
} from "@src/components/navbar/config";
import { useShowAvailableLanguages, useTransitionAnimation } from "./hooks";
import { INavBar } from "../../interfaces";
import { NavBodyCSS, LanguageContainerCSS, NavbarOverrideCSS } from "./styles";
import { Language as LanguageIcon, Arrow as ArrowIcon } from "@icons";
import { Forbole as ForboleLogo } from "@icons";

const NavBody = (props: INavBar) => {
  const { isOpen } = props;
  const { showLanguage, toggleShowLanguage } = useShowAvailableLanguages();
  const { languageTransitions, displayTransitions } = useTransitionAnimation({
    isOpen,
    showLanguage,
  });
  const { t } = useTranslation("nav");
  const currentLanguage: string = mapLanguages[i18n.language || "en"];

  return displayTransitions.map(
    ({ item, key, props }: any) =>
      item && (
        <NavBodyCSS key={key} style={props}>
          <NavbarOverrideCSS>
            <Link href="/">
              <a>
                <ForboleLogo />
              </a>
            </Link>
          </NavbarOverrideCSS>
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
              <div className="select-language" onClick={toggleShowLanguage}>
                {currentLanguage}
                <span>
                  <ArrowIcon />
                </span>
              </div>
            </li>
            {languageTransitions.map(
              ({ item, key, props }: any) =>
                item && (
                  <LanguageContainerCSS style={props} key={key}>
                    {availableLanguages.map((x) => (
                      <li key={x.key}>{x.display}</li>
                    ))}
                  </LanguageContainerCSS>
                )
            )}
          </ul>
        </NavBodyCSS>
      )
  );
};

export default NavBody;
