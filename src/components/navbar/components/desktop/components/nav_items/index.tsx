import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { Dropdown } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useTranslation, i18n } from "i18n";
import {
  navItems,
  availableLanguages,
  mapLanguages,
} from "@src/components/navbar/config";
import { NavItemsCSS } from "./styles";
import { formatLanguageList } from "./config";

const NavItems = (props: any) => {
  const { color } = props;

  const router = useRouter();
  const { t } = useTranslation("nav");
  const options = formatLanguageList(availableLanguages);
  const handleDropdownOnClick = (e: any, data: any) => {
    i18n.changeLanguage(data.value);
  };

  return (
    <NavItemsCSS color={color}>
      {navItems.slice(1).map((x) => (
        <Link href={x.link} key={x.display}>
          <a className={classNames({ active: router.pathname === x.link })}>
            {t(x.display)}
            <div> &#9670;</div>
          </a>
        </Link>
      ))}
      <Dropdown
        simple
        text={mapLanguages[i18n.language || "en"]}
        direction="right"
        options={options}
        onChange={handleDropdownOnClick}
      />
    </NavItemsCSS>
  );
};

export default NavItems;
