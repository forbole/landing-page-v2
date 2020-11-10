import { useEffect } from "react";
import App, { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { init } from "@socialgouv/matomo-next";
import { GlobalCSS } from "@styles";
import { appWithTranslation } from "../../i18n";
import "../../semantic/dist/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
    const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <>
      <GlobalCSS />
      <ToastContainer position="top-center" autoClose={6000} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
