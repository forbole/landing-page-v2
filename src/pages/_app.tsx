import { AppProps } from "next/app";
import { GlobalCSS } from "@styles";
import { appWithTranslation } from "../../i18n";
import "../../semantic/dist/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-awesome-slider/dist/styles.css";

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
