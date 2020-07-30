import React from "react";
import classNames from "classnames";
import { useTranslation } from "i18n";
import { convertToMoney } from "@utils/convert_to_money";
import { HubDetailCSS, StatDetailsCSS } from "./styles";
// finalize once more details are given
const HubDetail = (props: any) => {
  const {
    title = "",
    atom = 0,
    percent = 0,
    main = false,
    usd = 0,
    perAtom = 0,
  } = props;
  const { t } = useTranslation("stake_now");

  return (
    <HubDetailCSS className={classNames({ main })}>
      <p className={classNames("title", { main })}>
        {!!main && <img src="images/icons/cosmos_hub.png" />}
        {t(title)}
      </p>
      <StatDetailsCSS>
        <p className={classNames("atom", { main })}>
          {convertToMoney(atom)} {t("atom")}
        </p>
        {main ? (
          <>
            <div className="main-only-content">
              <p className="usd">
                {convertToMoney(usd)} {t("usd")}
              </p>
              <p className="per-atom">
                (${perAtom}/${t("atom")})
              </p>
            </div>
            <hr className="main-content-hr" />
          </>
        ) : (
            <p>{percent}%</p>
          )}
      </StatDetailsCSS>
    </HubDetailCSS>
  );
};

export default HubDetail;
