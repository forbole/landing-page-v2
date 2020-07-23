import React from "react";
import NavBody from "./components/nav_body";
import Navbar from "./components/navbar";
import { useMobileNavHook } from "./hooks";
import { MobileNavCSS } from "./styles";

const MobileNav = () => {
  const { isOpen, toggle } = useMobileNavHook();

  return (
    <MobileNavCSS>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <NavBody isOpen={isOpen} toggle={toggle} />
    </MobileNavCSS>
  );
};

export default MobileNav;
