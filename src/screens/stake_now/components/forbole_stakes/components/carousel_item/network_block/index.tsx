import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import { BlockCSS, PercentCSS, Button } from "./styles";

const NetworkBlock = (props: any) => {
  console.log(`huuiii`);
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
  console.log(`network block`, props);

  const { t } = useTranslation("stake_now");

  const formattedAmount = token === "---" ? token : convertToMoney(token);
  return (
    <BlockCSS className={classNames({ main })}>
      <p className={classNames("title", { main })}>
        {!!main && <img src={`/static/images/icons/${name}.png`} />}
        {t(title)}
      </p>
      <p className={classNames("token", { main })}>
        {token} {denom}
      </p>
      {main ? (
        <>
          <div className="main-only-content">
            <p className="usd">
              {usd} {t("usd")}
            </p>
            <p className="per-token">
              (${perToken}/${denom})
            </p>
          </div>
          <hr className="main-content-hr" />
        </>
      ) : (
        <p>{percent}%</p>
      )}
      <a href={delegate} target="_blank" rel="noreferrer">
        <Button>{t("stakeNow")}</Button>
      </a>
    </BlockCSS>
  );
};

export default NetworkBlock;
