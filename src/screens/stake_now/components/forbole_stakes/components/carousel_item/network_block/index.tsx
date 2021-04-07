import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import { BlockCSS, PercentCSS, Button } from "./styles";

const NetworkBlock = (props: any) => {
  // console.log(`network block`, props);
  const {
    title = "",
    icon = "",
    token,
    percent,
    usd,
    denom,
    delegate = process.env.NEXT_PUBLIC_URL,
    // icon = "",
    // network = {
    //   currentMarketValue: "---",
    //   denom: "LIKE",
    //   otherDelegations: {
    //     title: "otherDelegations",
    //     token: "---",
    //     percent: "---",
    //   },
    //   selfDelegations: {
    //     title: "selfDelegations",
    //     token: "---",
    //     percent: "---",
    //   },
    //   title: "Likecoin",
    //   totalMarketValue: "---",
    //   totalToken: "---",
    //   voting: {},
    // },
  } = props;
  const { t } = useTranslation("stake_now");

  const formattedAmount = token === "---" ? token : convertToMoney(token);
  return (
    <BlockCSS>
      <p className={"title-container"}>
        <img src={`/static/images/icons/${icon}.png`} />
        {t(title)}
      </p>
      <p className={"token"}>
        {token} {denom}
      </p>
      <div className="main-only-content">
        <p className="usd">
          {usd} {t("usd")}
        </p>
      </div>
      <p>{percent}%</p>
      <a href={delegate} target="_blank" rel="noreferrer">
        <Button>{t("stakeNow")}</Button>
      </a>
    </BlockCSS>
  );
};

export default NetworkBlock;
