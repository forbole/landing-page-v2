import React from "react";
import { useTranslation } from "i18n";
import { Award } from "@icons";
import { SingleMilestoneCSS } from "./styles";
import { milestonesData } from "../../config";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const SingleMilestone = (props: any) => {
  const { t } = useTranslation("about");

  const { date, year, title, detail } = props;
  return (
    <ConditionalWrapper
      condition={year}
      wrapper={(children) => (
        <div style={{ flexDirection: "column" }}>{children}</div>
      )}
    >
      <SingleMilestoneCSS>
        <div>
          <span>
            <h4>{t(title)}</h4>
          </span>
          <p>{t(detail)}</p>
        </div>
        <p className="date">{t(date)}</p>
      </SingleMilestoneCSS>
    </ConditionalWrapper>
  );
};

export default SingleMilestone;
