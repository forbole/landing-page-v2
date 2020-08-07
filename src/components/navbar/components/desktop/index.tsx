import React from "react";
import Link from "next/link";
import { Forbole as ForboleLogo } from "@icons";
import { theme } from "@styles";
import NavItems from "./components/nav_items";
import { DesktopNavCSS } from "./styles";

const { colors } = theme;

const DesktopNav = (props: any) => {
  const { color, displayBackground } = props;

  return (
    <DesktopNavCSS
      displayBackground={displayBackground}
      color={displayBackground ? colors.forboleRed : color}
    >
      <Link href="/">
        <a>
          <ForboleLogo />
        </a>
      </Link>
      <NavItems color={displayBackground ? colors.gray600 : color} />
    </DesktopNavCSS>
  );
};

export default DesktopNav;
