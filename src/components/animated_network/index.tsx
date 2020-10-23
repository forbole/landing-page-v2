import React from "react";
import { useTranslation } from "i18n";
import { Block } from "@icons";
import { convertToMoney } from "@utils/convert_to_money";
import { Button, NetworkCSS } from "./styles";
import { INetworkProps } from "./interfaces";

const Network = (props: INetworkProps) => {
  const {
    image,
    name,
    amount = "---",
    delegate = process.env.NEXT_PUBLIC_URL,
  } = props;
  const { t } = useTranslation("stake_now");
  return (
    <a href={delegate} target="_blank" rel="noreferrer">
      <NetworkCSS>
        <img src={image} />
        <p className="name">{name}</p>
        <div className="flex">
          <p className="amount">
            <Block />
            {convertToMoney(amount)}
          </p>
          <div className="button-container">
            <Button>{t("stakeNow")}</Button>
          </div>
        </div>
      </NetworkCSS>
    </a>
  );
};

export default Network;
