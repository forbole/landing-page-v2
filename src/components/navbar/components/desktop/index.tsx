import React from "react";
import Link from "next/link";
import { Forbole as ForboleLogo } from "@icons";
import NavItems from "./components/nav_items";
import { DesktopNavCSS } from "./styles";

const DesktopNav = () => {
  return (
    <DesktopNavCSS>
      <Link href="/">
        <a>
          <ForboleLogo />
        </a>
      </Link>
      <NavItems />
    </DesktopNavCSS>
  );
};

export default DesktopNav;
