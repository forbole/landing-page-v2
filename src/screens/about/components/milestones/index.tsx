import React from "react";
import { useTranslation } from "i18n";
import { MilestonesCSS, MilestonesGridCSS, SingleMilestoneCSS } from "./styles";
import { MaxWidthContainerCSS } from "@styles/components";
import { Award } from "@icons";
import { milestonesData } from "./config";

const Milestones = () => {
  const { t } = useTranslation("about");
  return (
    <MilestonesCSS>
      <MaxWidthContainerCSS>
        <h3>{t("milestones")}</h3>
        <MilestonesGridCSS>
          {milestonesData.map((x) => (
            <SingleMilestoneCSS key={x.title}>
              <p className="date">{t(x.date)}</p>
              <div>
                <span className="badge-wrapper">
                  {!!x.badge && <Award />}
                  <h4>{t(x.title)}</h4>
                </span>
                <p>{t(x.detail)}</p>
              </div>
            </SingleMilestoneCSS>
          ))}
        </MilestonesGridCSS>
      </MaxWidthContainerCSS>
    </MilestonesCSS>
  );
};

export default Milestones;
