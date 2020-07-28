import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NavBar, Footer } from "@components";
import { MainContentCSS } from "./styles";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  footer = true,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* refactor this in to document later */}
        <meta name="og:type" content="website" />
        <meta name="description" content="" />
        <meta name="og:title" content="Forbole" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="og:url" content={`${process.env.URL}${router.pathname}`} />
        <meta name="og:description" content="" />
        <meta name="og:image" content="" />
      </Head>
      <NavBar />
      <MainContentCSS>{children}</MainContentCSS>
      {!!footer && <Footer />}
    </>
  );
};

export default Layout;
