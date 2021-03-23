import React from "react";
import { useTranslation } from "i18n";
import { SingleMilestoneCSS } from "./styles";

const SingleMilestone = (props: any) => {
  const { t } = useTranslation("about");

  const { date, title, detail } = props;
  return (
    <SingleMilestoneCSS>
      <div>
        <span>
          <h4>{t(title)}</h4>
        </span>
        <p>{t(detail)}</p>
      </div>
      <p className="date">{t(date)}</p>
    </SingleMilestoneCSS>
  );
};

export default SingleMilestone;
