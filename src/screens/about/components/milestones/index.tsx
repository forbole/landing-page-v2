import React from "react";
import { useTranslation } from "i18n";
import {
  MilestonesCSS,
  MilestonesGridCSS,
  TimelineCSS,
  YearCSS,
} from "./styles";
import { MaxWidthContainerCSS } from "@styles/components";
import { fetchMileStoneData, milestonesData } from "./config";
import SingleMilestone from "./components/single_milestone";

const Milestones = () => {
  const { t } = useTranslation("about");
  const data = fetchMileStoneData();
  console.log(data);
  return (
    <MilestonesCSS>
      {/* <MaxWidthContainerCSS> */}
      <h3>{t("milestones")}</h3>
      {milestonesData.map((x, i) => (
        // <>
        <TimelineCSS key={i}>
          {!!x.year && (
            <YearCSS>
              <div className="dot">
                <img src="static/images/assets/year.png" className="yearimg" />
              </div>
              <h3>{x.year}</h3>
            </YearCSS>
          )}
          <MaxWidthContainerCSS>
            <MilestonesGridCSS>
              <SingleMilestone
                key={x.title}
                year={x.year}
                date={x.date}
                title={x.title}
                detail={x.detail}
              />
            </MilestonesGridCSS>
          </MaxWidthContainerCSS>
        </TimelineCSS>
        // </>
      ))}
      {/* </MaxWidthContainerCSS> */}
    </MilestonesCSS>
  );
};

export default Milestones;
