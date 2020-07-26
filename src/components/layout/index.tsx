import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NavBar, Footer } from "@components";
import { LayoutCSS } from "./styles";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();
  return (
    <LayoutCSS>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta
          property="og:url"
          content={`${process.env.URL}${router.asPath}`}
          key="url"
        />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </LayoutCSS>
  )
};

export default Layout;
