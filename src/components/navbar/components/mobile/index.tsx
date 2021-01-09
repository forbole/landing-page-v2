import React from "react";
import classNames from "classnames";
import NavBody from "./components/nav_body";
import Navbar from "./components/navbar";
import { useMobileNavHook } from "./hooks";
import { MobileNavCSS, MobileNavBarIconCSS } from "./styles";
import { IMobileNav } from "./interfaces";

const MobileNav = (props: IMobileNav) => {
  const { isOpen, toggle } = useMobileNavHook();
  const { color, displayBackground } = props;
  return (
    <MobileNavCSS className={classNames("mobile-nav")}>
      <MobileNavBarIconCSS
        isOpen={isOpen}
        onClick={toggle}
        color={color}
        displayBackground={displayBackground}
        className={classNames("icon")}
      ></MobileNavBarIconCSS>
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        color={color}
        displayBackground={displayBackground}
      />
      <NavBody isOpen={isOpen} toggle={toggle} />
    </MobileNavCSS>
  );
};

export default MobileNav;
