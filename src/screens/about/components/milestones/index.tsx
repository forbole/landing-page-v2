import React from "react";
import { useTranslation } from "i18n";
import { MilestonesCSS, MilestonesGridCSS } from "./styles";
import { MaxWidthContainerCSS } from "@styles/components";
import { fetchMileStoneData } from "./config";
import SingleMilestone from "./components/single_milestone";

const Milestones = () => {
  const { t } = useTranslation("about");
  const data = fetchMileStoneData();
  return (
    <MilestonesCSS>
      <MaxWidthContainerCSS>
        <h3>{t("milestones")}</h3>
        <MilestonesGridCSS>
          {data.map((x) => (
            <SingleMilestone
              key={x.title}
              date={x.date}
              title={x.title}
              detail={x.detail}
              badge={x.badge}
            />
          ))}
        </MilestonesGridCSS>
      </MaxWidthContainerCSS>
    </MilestonesCSS>
  );
};

export default Milestones;
