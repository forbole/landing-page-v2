import React, { ReactNode } from "react";
import Head from "next/head";
import * as R from "ramda";
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
  type?: string;
  image?: string;
};

const Layout = ({
  children,
  title = "Forbole",
  footer = true,
  navColor,
  description = "Too many friends. Too few relationships. Let's change our social network. Recommend trusted people and start making meaningful relationships with rewards.",
  keywords = [],
  mobileNavColor,
  type = "website",
  image,
}: Props) => {
  const router = useRouter();
  const currentPath = router.asPath === "/" ? "/" : `${router.asPath}`;
  const url = process.env.NEXT_PUBLIC_URL;
  const ogImage = image ?? `${url}/static/icons/favicon-96x96.png`;
  const baseKeywords = ["Forbole", "blockchain", "social network"];
  const formattedKeyworks = R.uniq(R.concat(keywords, baseKeywords));
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={formattedKeyworks.join(", ")} />
        <meta name="og:type" content={type} />
        <meta name="og:title" content={title} />
        <meta name="og:site_name" content="Forbole" />
        <meta name="og:url" content={`${url}${currentPath}`} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={ogImage} />
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
