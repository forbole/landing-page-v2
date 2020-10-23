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
  mobileNavColor?: string;
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
  mobileNavColor,
}: Props) => {
  const router = useRouter();
  const currentPath = router.pathname === "/" ? "/" : `${router.pathname}`;
  const url = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Forbole" />
        <meta name="og:url" content={`${url}${currentPath}`} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content={`${url}/static/icons/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${url}/static/icons/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${url}/static/icons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${url}/static/icons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${url}/static/icons/manifest.json`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <NavBar color={navColor} mobileColor={mobileNavColor} />
      <FlexCSS>
        {children}
        {!!footer && <Footer />}
      </FlexCSS>
    </>
  );
};

export default Layout;
