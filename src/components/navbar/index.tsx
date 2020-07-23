import React from "react";
import DesktopNav from "./components/desktop";
import MobileNav from "./components/mobile";

const NavBar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default NavBar;
