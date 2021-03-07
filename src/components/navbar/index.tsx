import React from "react";
import DesktopNav from "./components/desktop";
import MobileNav from "./components/mobile";
import { INavBar } from "./interfaces";
import { useNavHook } from "./hooks";

const NavBar = (props: INavBar) => {
  const { color, mobileColor } = props;

  const { displayBackground } = useNavHook();

  return (
    <>
      <DesktopNav color={color} displayBackground={displayBackground} />
      <MobileNav color={mobileColor} displayBackground={displayBackground} />
    </>
  );
};

export default NavBar;
