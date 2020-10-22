import React from "react";
import { useTranslation } from "i18n";
import { MaxWidthContainerCSS } from "@styles/components";
import { OpportunitiesCSS, HeaderCSS, GridCSS } from "./styles";
import { openingsData } from "./config";
import Opening from "./components/opening";

const Opportunities = () => {
  const { t } = useTranslation("about");
  return (
    <OpportunitiesCSS id="opportunities">
      <MaxWidthContainerCSS>
        <HeaderCSS>
          <h3>{t("currentOpportunities")}</h3>
          <p>{t("currentOpportunitiesDetails")}</p>
        </HeaderCSS>
        {!openingsData.length && (
          <div className="no-opening">
            <p>{t("noOpportunities")}</p>
          </div>
        )}
        <GridCSS>
          {openingsData.map((x, i) => (
            <Opening
              key={i}
              title={x.title}
              description={x.description}
              slug={x.slug}
            />
          ))}
        </GridCSS>
      </MaxWidthContainerCSS>
    </OpportunitiesCSS>
  );
};

export default Opportunities;
