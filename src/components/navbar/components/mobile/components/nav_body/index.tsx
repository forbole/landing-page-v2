import React from "react";
import Link from "next/link";
import { useTransition } from "react-spring";
import { useTranslation, i18n } from "i18n";
import { navItems, availableLanguages, mapLanguages } from "@src/components/navbar/config";
import { useShowAvailableLanguages } from "@src/components/navbar/hooks";
import { INavBar } from "../../interfaces";
import { NavBodyCSS, LanguageContainerCSS } from "./styles";
import { Language as LanguageIcon, Arrow as ArrowIcon } from "@icons";

const NavBody = (props: INavBar) => {
  const { isOpen } = props;
  const { showLanguage, toggleShowLanguage } = useShowAvailableLanguages();
  const { t } = useTranslation("nav");
  const currentLanguage: string = mapLanguages[i18n.language || "en"];

  const languageTransitions: any = useTransition(showLanguage, null, {
    enter: () => async (next: any) => {
      await next({ display: "block" });
      await next({ opacity: "1" });
      await next({ maxHeight: "500px" });
    },
    leave: () => async (next: any) => {
      await next({ maxHeight: "0" });
      await next({ opacity: "0" });
      await next({ display: "none" });
    },
    from: {
      opacity: "0",
    },
  });

  const displayTransitions: any = useTransition(isOpen, null, {
    enter: () => async (next) => {
      await next({ display: "block" });
      await next({ opacity: "1" });
    },
    leave: () => async (next) => {
      await next({ opacity: "0" });
      await next({ display: "none" });
    },
    from: {
      display: "none",
      opacity: "0",
    },
    option: { mass: 1, tension: 500, friction: 18 },
  });

  return displayTransitions.map(
    ({ item, key, props }: any) =>
      item && (
        <NavBodyCSS key={key} style={props}>
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
