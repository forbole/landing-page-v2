import React from "react";
import { useTranslation } from "i18n";
import { NetworkContentCSS } from "./styles";

function NetworkContent(props: any) {
  const { t } = useTranslation("networks");
  const { networkKey } = props;
  return (
    <NetworkContentCSS>
      <div className="wrapper">
        <p>{t(`${networkKey}.content`)}</p>
      </div>
    </NetworkContentCSS>
  );
}

export default NetworkContent;
