import React from "react";
import Link from "next/link";
import DesktopNav from "./components/desktop";
import MobileNav from "./components/mobile";
import { NavBarCSS } from "./styles";

const NavBar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default NavBar;
