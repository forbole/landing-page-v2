import React from "react";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { getNetworkInfo } from "@src/utils/network_info";
import { calculatorKeys } from "./config";
import { Button, NetworkChoicesCSS } from "./styles";
import { INetworkProps } from "./interfaces";
import { ParagraphTitleCSS } from "../../styles";

const Networks = (props: INetworkProps) => {
  const { t } = useTranslation("stake_now");
  const { selectedToken, setSelectedToken } = props;
  const networkData = calculatorKeys.map((x) => getNetworkInfo(x));
  return (
    <div>
      <ParagraphTitleCSS>{t("selectNetwork")}</ParagraphTitleCSS>
      <NetworkChoicesCSS>
        {networkData.map((x) => (
          <Button
            key={x.name}
            onClick={() => setSelectedToken(x.key)}
            className={classNames({ active: x.key == selectedToken })}
          >
            <img src={x.image} />
            <p>{x.name}</p>
          </Button>
        ))}
      </NetworkChoicesCSS>
    </div>
  );
};

export default Networks;
