import "../scss/style.scss";
import { AppProps } from "next/app";
import { appWithTranslation } from "../../i18n";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
