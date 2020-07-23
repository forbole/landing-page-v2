import React from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { Icon } from 'semantic-ui-react'
import { navItems } from "@src/components/navbar/config";
import { INavBar } from "../../interfaces";
import { NavBodyCSS } from "./styles";

const NavBody = (props: INavBar) => {
  const { isOpen } = props;
  const { t } = useTranslation("nav");
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
        {/* <Icon name="globe" /> */}
        <i class="bell outline icon"></i>
        <Icon disabled name='cat' />
        <li>hello</li>
      </ul>
    </NavBodyCSS>
  );
};

export default NavBody;
