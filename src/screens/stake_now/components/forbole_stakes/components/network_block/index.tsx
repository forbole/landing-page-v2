import React from "react";
import ReactLoading from "react-loading";
import classNames from "classnames";
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
  const { t } = useTranslation("stake_now");
  const networkInfo: any = getNetworkInfo(network);
  const delegate = networkInfo.delegate;
  // console.log(`frontend usd`, usd);

  return (
    <a href={delegate} target="_blank" rel="noreferrer">
      <BlockCSS className={classNames({ active: active })}>
        <FlexCSS>
          <div className={"title-container"}>
            <img src={`/static/images/icons/${icon}`} />
            <h3>{t(title)}</h3>
          </div>
          {network === undefined || token == 0 || usd == 0 || percent == 0 ? (
            <>
              <ReactLoading
                type={"bars"}
                color={"#000"}
                height={"3rem"}
                width={"3rem"}
              />
            </>
          ) : (
            <>
              <p className={"token"}>
                {token} {denom}
              </p>
              {usd === null ? (
                <p style={{ visibility: "hidden" }}>
                  {usd} {t("usd")}
                </p>
              ) : (
                <p className="usd">
                  {usd} {t("usd")}
                </p>
              )}
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
