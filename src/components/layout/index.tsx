import React, { ReactNode } from "react";
import Head from "next/head";
import { NavBar, Footer } from "@components";
import { LayoutCSS, MainContentCSS } from "./styles";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <LayoutCSS>
      <Head>
        <title>{title}</title>
        {/*  edit later */}
        <meta name="og:type" content="website" />
        <meta name="description" content="" />
        <meta name="og:title" content="Forbole" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="og:url" content={process.env.URL} />
        <meta name="og:description" content="" />
        <meta name="og:image" content="" />
      </Head>
      <NavBar />
      <MainContentCSS>{children}</MainContentCSS>
      <Footer />
    </LayoutCSS>
  );
};

export default Layout;
