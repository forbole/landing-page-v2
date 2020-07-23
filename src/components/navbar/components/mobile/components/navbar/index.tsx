import React from "react";
import { INavBar } from "./interfaces";
import { MobileNavBarIconCSS, MobileNavBarCSS } from "./styles";

const Navbar = (props: INavBar) => {
  const { isOpen, toggle } = props;
  return (
    <MobileNavBarCSS>
      <MobileNavBarIconCSS isOpen={isOpen} onClick={toggle}>
        <div></div>
      </MobileNavBarIconCSS>
    </MobileNavBarCSS>
  );
};

export default Navbar;
