import React from "react";
import Link from "next/link";
import { useTransition } from "react-spring";
import { useTranslation, i18n } from "i18n";
import { navItems, availableLanguages } from "@src/components/navbar/config";
import { useShowAvailableLanguages } from "@src/components/navbar/hooks";
import { INavBar } from "../../interfaces";
import { NavBodyCSS, LanguageContainerCSS } from "./styles";
import { Language as LanguageIcon, Arrow as ArrowIcon } from "@icons";

const NavBody = (props: INavBar) => {
  const { isOpen } = props;
  const { showLanguage, toggleShowLanguage } = useShowAvailableLanguages();
  const { t } = useTranslation("nav");
  const currentLanguage: string = i18n.language || "en";

  const languageTransitions: any = useTransition(showLanguage, null, {
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

  const displayTransitions: any = useTransition(isOpen, null, {
    enter: (item: any) => async (next, cancel) => {
      await next({ display: "block" });
      await next({ opacity: "1" });
    },
    leave: (item: any) => async (next, cancel) => {
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
                {t(currentLanguage)}
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
                      <li key={x}>{t(x)}</li>
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
