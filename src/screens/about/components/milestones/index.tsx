import React from "react";
import { useTranslation } from "i18n";
import { MilestonesCSS, MilestonesGridCSS } from "./styles";
import { MaxWidthContainerCSS } from "@styles/components";
import { milestonesData } from "./config";
import SingleMilestone from "./components/single_milestone";

const Milestones = () => {
  const { t } = useTranslation("about");
  const half = Math.floor(milestonesData.length / 2);
  const milestoneRowOne = milestonesData.slice(0, half);
  const milestoneRowTwo = milestonesData.slice(half);
  console.log(milestoneRowTwo);
  return (
    <MilestonesCSS>
      <MaxWidthContainerCSS>
        <h3>{t("milestones")}</h3>
        <MilestonesGridCSS>
          <span>
            {milestoneRowOne.map((x) => (
              <SingleMilestone
                key={x.title}
                date={x.date}
                title={x.title}
                detail={x.detail}
                badge={x.badge}
              />
            ))}
          </span>
          <span>
            {milestoneRowTwo.map((x) => (
              <SingleMilestone
                key={x.title}
                date={x.date}
                title={x.title}
                detail={x.detail}
                badge={x.badge}
              />
            ))}
          </span>
        </MilestonesGridCSS>
      </MaxWidthContainerCSS>
    </MilestonesCSS>
  );
};

export default Milestones;
