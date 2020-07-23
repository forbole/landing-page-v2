import React from "react";
import { Forbole as ForboleLogo } from "@icons";
import { INavBar } from "./interfaces";
import { MobileNavBarIconCSS, MobileNavBarCSS } from "./styles";

const Navbar = (props: INavBar) => {
  const { isOpen, toggle } = props;
  return (
    <MobileNavBarCSS isOpen={isOpen}>
      <ForboleLogo />
      <MobileNavBarIconCSS isOpen={isOpen} onClick={toggle}>
        <div></div>
      </MobileNavBarIconCSS>
    </MobileNavBarCSS>
  );
};

export default Navbar;
