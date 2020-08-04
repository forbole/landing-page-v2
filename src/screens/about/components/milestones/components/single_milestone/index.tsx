import React from "react";
import { useTranslation } from "i18n";
import { Award } from "@icons";
import { SingleMilestoneCSS } from "./styles";

const SingleMilestone = (props: any) => {
  const { t } = useTranslation("about");
  const { date, badge, title, detail } = props;
  return (
    <SingleMilestoneCSS>
      <p className="date">{t(date)}</p>
      <div>
        <span className="badge-wrapper">
          {!!badge && <Award />}
          <h4>{t(title)}</h4>
        </span>
        <p>{t(detail)}</p>
      </div>
    </SingleMilestoneCSS>
  );
};

export default SingleMilestone;
