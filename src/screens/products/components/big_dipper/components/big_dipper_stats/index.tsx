import React from "react";
import { useTranslation } from "i18n";
import { BigDipperStatsCSS, BigDipperDivCSS, ContentCSS } from "./styles";
import { bdStats } from "./config";

export const BigDipperStats = () => {
  const { t } = useTranslation("products");
  return (
    <BigDipperStatsCSS>
      {bdStats.map((x, i) => (
        <ContentCSS key={i}>
          <BigDipperDivCSS>
            <h1>{x.stats}</h1>
            <p>{x.description}</p>
          </BigDipperDivCSS>
          {!!(i < bdStats.length - 1) && <hr />}
        </ContentCSS>
      ))}
    </BigDipperStatsCSS>
  );
};

export default BigDipperStats;
