import React from "react";
import DesktopNav from "./components/desktop";
import MobileNav from "./components/mobile";

const NavBar = (props: any) => {
  const { color } = props;

  return (
    <>
      <DesktopNav color={color} />
      <MobileNav />
    </>
  );
};

export default NavBar;
