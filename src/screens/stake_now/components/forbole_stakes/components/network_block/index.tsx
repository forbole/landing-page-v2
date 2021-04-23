import React, { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import { BlockCSS, FlexCSS, PercentCSS, Button } from "./styles";

const NetworkBlock = (props: any) => {
  const {
    active,
    title = "",
    icon = "",
    token,
    percent,
    usd,
    denom,
    delegate = process.env.NEXT_PUBLIC_URL,
  } = props;
  const { t } = useTranslation("stake_now");

  const formattedAmount = token === "---" ? token : convertToMoney(token);
  return (
    <a href={delegate} target="_blank" rel="noreferrer">
      <BlockCSS className={classNames({ active: active })}>
        <FlexCSS>
          <div className={"title-container"}>
            <img src={`/static/images/icons/${icon}.png`} />
            <h3>{t(title)}</h3>
          </div>
          <p className={"token"}>
            {token} {denom}
          </p>
          <p className="usd">
            {usd} {t("usd")}
          </p>
          <PercentCSS>
            <p>{percent}%</p>
          </PercentCSS>
          <div className="button-container">
            <Button>{t("stakeNow")}</Button>
          </div>
        </FlexCSS>
      </BlockCSS>
    </a>
  );
};

export default NetworkBlock;
