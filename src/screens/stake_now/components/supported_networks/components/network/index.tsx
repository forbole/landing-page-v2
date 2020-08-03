import React from "react";
import { useTranslation } from "i18n";
import { Block } from "@icons";
import { convertToMoney } from "@utils/convert_to_money";
import { Button, NetworkCSS } from "./styles";
import { INetworkProps } from "./interfaces";

const Network = (props: INetworkProps) => {
  const { image, name, amount } = props;
  const { t } = useTranslation("stake_now");
  return (
    <NetworkCSS>
      <img src={image} />
      <p className="name">{name}</p>
      <p className="amount">
        <Block />
        {convertToMoney(amount)}
      </p>
      <div className="button-container">
        <Button>{t("stakeNow")}</Button>
      </div>
    </NetworkCSS>
  );
};

export default Network;
