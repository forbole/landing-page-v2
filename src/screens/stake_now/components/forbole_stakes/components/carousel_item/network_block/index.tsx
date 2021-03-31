import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import { BlockCSS, Button } from "./styles";

const NetworkBlock = (props: any) => {
  const {
    title = "",
    name = "",
    token = 0,
    percent = 0,
    main = false,
    usd = 0,
    perToken = 0,
    denom,
    delegate = process.env.NEXT_PUBLIC_URL,
  } = props;

  const { t } = useTranslation("stake_now");

  const formattedAmount = token === "---" ? token : convertToMoney(token);
  return (
    <BlockCSS className={classNames({ main })}>
      <div className="image-container">
        <img src={`/static/images/icons/${name}.png`} />
        {t(title)}
      </div>
      <div className="amount">
        <div>
          <h3>{formattedAmount}</h3>
        </div>
        <p>{usd}</p>
      </div>
      <div>{percent}</div>
      <a href={delegate} target="_blank" rel="noreferrer">
        <Button>{t("stakeNow")}</Button>
      </a>
    </BlockCSS>
  );
};

export default NetworkBlock;
