import React from "react";
import ReactLoading from "react-loading";
import classNames from "classnames";
import { NoSSR } from "@components";
import { useTranslation } from "i18n";
import { getNetworkInfo } from "@src/utils/network_info";
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
    network,
  } = props;
  console.log(`blockkkkkkkkkkkk`, token, usd, percent);
  const { t } = useTranslation("stake_now");
  const networkInfo: any = getNetworkInfo(network);
  const delegate = networkInfo.delegate;

  return (
    <a href={delegate} target="_blank" rel="noreferrer">
      <BlockCSS className={classNames({ active: active })}>
        <FlexCSS>
          <div className={"title-container"}>
            <img src={`/static/images/icons/${icon}.png`} />
            <h3>{t(title)}</h3>
          </div>
          {token == 0 || usd == 0 || percent == 0 ? (
            <NoSSR>
              <ReactLoading
                type={"bars"}
                color={"#000"}
                height={"3rem"}
                width={"3rem"}
              />
            </NoSSR>
          ) : (
            <>
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
            </>
          )}
        </FlexCSS>
      </BlockCSS>
    </a>
  );
};

export default NetworkBlock;
