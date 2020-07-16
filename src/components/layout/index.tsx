import React, { ReactNode } from "react";
import Head from "next/head";
import { NavBar, Footer } from "@components";
import { LayoutCSS } from "./styles";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <LayoutCSS>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    {children}
    <Footer />
  </LayoutCSS>
);

export default Layout;