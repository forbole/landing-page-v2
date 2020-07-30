import React from "react";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { networkData } from "../../../../config";
import { Button, NetworkChoicesCSS } from "./styles";
import { INetworkProps } from "./interfaces";
import { ParagraphTitleCSS } from "../../styles";

const Networks = (props: INetworkProps) => {
  const { t } = useTranslation("stake_now");
  const { selectedToken, setSelectedToken } = props;

  return (
    <div>
      <ParagraphTitleCSS>{t("selectNetwork")}</ParagraphTitleCSS>
      <NetworkChoicesCSS>
        {networkData.map((x) => (
          <Button
            key={x.name}
            onClick={() => setSelectedToken(x.name)}
            className={classNames({ active: x.name == selectedToken })}
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
