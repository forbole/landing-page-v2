import React from "react";
import { useTranslation } from "i18n";
import { MilestonesCSS, MilestonesGridCSS } from "./styles";
import { MaxWidthContainerCSS } from "@styles/components";
import { milestoneRowOne, milestoneRowTwo } from "./config";
import SingleMilestone from "./components/single_milestone";

const Milestones = () => {
  const { t } = useTranslation("about");

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
