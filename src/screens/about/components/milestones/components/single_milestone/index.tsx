import React from "react";
import { useTranslation } from "i18n";
import { Award } from "@icons";
import { SingleMilestoneCSS } from "./styles";

const SingleMilestone = (props: any) => {
  const { t } = useTranslation("about");
  const { date, year, badge, title, detail } = props;
  return (
    <SingleMilestoneCSS>
      {!!year && <h3>{year}</h3>}
      <div>
        <span className="badge-wrapper">
          {/* {!!badge && <Award />} */}
          <h4>{t(title)}</h4>
        </span>
        <p>{t(detail)}</p>
      </div>
      <p className="date">{t(date)}</p>
    </SingleMilestoneCSS>
  );
};

export default SingleMilestone;
