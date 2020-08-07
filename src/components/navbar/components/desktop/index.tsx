import React from "react";
import Link from "next/link";
import { Forbole as ForboleLogo } from "@icons";
import { theme } from "@styles";
import NavItems from "./components/nav_items";
import { DesktopNavCSS } from "./styles";
import { useDesktopNavHook } from "./hooks";

const { colors } = theme;

const DesktopNav = (props: any) => {
  const { color } = props;
  const { displayBackground } = useDesktopNavHook();

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
