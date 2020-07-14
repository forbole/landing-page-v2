import React, { ReactNode } from "react";
import Head from "next/head";
import NavBar from "@components/navbar";
import "./styles.scss";
import "../global.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="Layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    {children}
    <footer>
      <hr />
      <span>(Footer)</span>
    </footer>
  </div>
);

export default Layout;
