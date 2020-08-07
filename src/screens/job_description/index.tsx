import React from "react";
import { IJopDescription } from "./interfaces";
import { JobDescriptionCSS, MaxWidthContainerCSS } from "./styles";
import { Description } from "./components";

const JobDescription = (props: IJopDescription) => {
  const { active } = props;

  return (
    <JobDescriptionCSS>
      <MaxWidthContainerCSS>
        <Description />
      </MaxWidthContainerCSS>
    </JobDescriptionCSS>
  );
};

export default JobDescription;
