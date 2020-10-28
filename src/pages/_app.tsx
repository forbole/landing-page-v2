import App, { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { GlobalCSS } from "@styles";
import { appWithTranslation } from "../../i18n";
import "../../semantic/dist/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
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
