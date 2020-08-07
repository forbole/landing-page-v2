import React from "react";
import NavBody from "./components/nav_body";
import Navbar from "./components/navbar";
import { useMobileNavHook } from "./hooks";
import { MobileNavCSS } from "./styles";
import { IMobileNav } from "./interfaces";

const MobileNav = (props: IMobileNav) => {
  const { isOpen, toggle } = useMobileNavHook();
  const { color } = props;

  return (
    <MobileNavCSS>
      <Navbar isOpen={isOpen} toggle={toggle} color={color} />
      <NavBody isOpen={isOpen} toggle={toggle} />
    </MobileNavCSS>
  );
};

export default MobileNav;
