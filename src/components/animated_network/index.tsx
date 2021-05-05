import React from "react";
import { useTranslation } from "i18n";
import classNames from "classnames";
import { Button, NetworkCSS } from "./styles";
import { INetworkProps } from "./interfaces";

const Network = (props: INetworkProps) => {
  const {
    image,
    name,
    disable,
    // amount = "---",
    delegate = process.env.NEXT_PUBLIC_URL,
  } = props;
  const { t } = useTranslation("stake_now");

  //const formattedAmount = amount === "---" ? amount : convertToMoney(amount);
  return (
    <a href={disable ? null : delegate} target="_blank" rel="noreferrer">
      <NetworkCSS>
        <img src={image} />
        <p className="name">{name}</p>
        <div className="flex">
          <p className="amount"></p>
          <div className="button-container">
            <Button className={classNames({ disabled: disable == true })}>
              {disable ? t("coming") : t("stakeNow")}
            </Button>
          </div>
        </div>
      </NetworkCSS>
    </a>
  );
};

export default Network;
