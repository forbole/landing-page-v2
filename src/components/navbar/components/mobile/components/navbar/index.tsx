import React from "react";
import Link from "next/link";
import { Forbole as ForboleLogo } from "@icons";
import { INavBar } from "../../interfaces";
import { MobileNavBarIconCSS, MobileNavBarCSS } from "./styles";

const Navbar = (props: INavBar) => {
  const { isOpen, toggle, color } = props;
  return (
    <MobileNavBarCSS isOpen={isOpen} color={color}>
      <Link href="/">
        <a>
          <ForboleLogo />
        </a>
      </Link>
      <MobileNavBarIconCSS isOpen={isOpen} onClick={toggle} color={color}>
        <div></div>
      </MobileNavBarIconCSS>
    </MobileNavBarCSS>
  );
};

export default Navbar;
