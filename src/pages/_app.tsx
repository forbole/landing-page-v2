import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import { GlobalCSS } from "@styles";
import { appWithTranslation } from "../../i18n";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
