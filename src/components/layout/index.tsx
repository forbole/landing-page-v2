import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NavBar, Footer } from "@components";
import { FlexCSS } from "./styles";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
  navColor?: string;
  description?: string;
  keywords?: string[];
};

const Layout = ({
  children,
  title = "Forbole",
  footer = true,
  navColor,
  description = "Too many friends. Too few relationships. Let's change our social network. Recommend trusted people and start making meaningful relationships with rewards.",
  keywords = ["Forbole", "blockchain", "social network"],
}: Props) => {
  const router = useRouter();
  const currentPath = router.pathname === "/" ? "/" : `${router.pathname}/`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Forbole" />
        <meta name="og:url" content={`${process.env.URL}${currentPath}`} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content={`${process.env.URL}/static/images/icons/forbole-logo-red.svg`}
        />
      </Head>
      <NavBar color={navColor} />
      <FlexCSS>
        {children}
        {!!footer && <Footer />}
      </FlexCSS>
    </>
  );
};

export default Layout;
