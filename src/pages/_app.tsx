import App, { AppProps } from "next/app";
import { GlobalCSS } from "@styles";
import { appWithTranslation } from "../../i18n";
import "../../semantic/dist/semantic.min.css";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
