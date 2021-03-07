import React from "react";
import { useTranslation } from "i18n";
import { MaxWidthContainerCSS } from "@styles/components";
import { OpportunitiesCSS, HeaderCSS, GridCSS } from "./styles";
import { openingsData } from "./config";
import Opening from "./components/opening";

const Opportunities = () => {
  const { t } = useTranslation("team");
  return (
    <OpportunitiesCSS id="opportunity">
      <MaxWidthContainerCSS>
        <HeaderCSS>
          <h3>{t("currentOpportunities")}</h3>
        </HeaderCSS>
        {!openingsData.length && (
          <div className="no-opening">
            <img src="/static/images/icons/unicorn-no-opportunity.png" />
            <p>{t("noOpportunities")}</p>
            {/* <p>{t("pleaseContactUs")}</p> */}
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
