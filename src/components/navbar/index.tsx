import React from "react";
import DesktopNav from "./components/desktop";
import MobileNav from "./components/mobile";
import { INavBar } from "./interfaces";

const NavBar = (props: INavBar) => {
  const { color } = props;

  return (
    <>
      <DesktopNav color={color} />
      <MobileNav />
    </>
  );
};

export default NavBar;
