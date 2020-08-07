import React from "react";
import { Layout } from "@components";
import { IJopDescription } from "./interfaces";
import { JobDescriptionCSS, MaxWidthContainerCSS } from "./styles";
import { Description } from "./components";

const JobDescription = (props: IJopDescription) => {
  const { active } = props;

  return (
    <Layout>
      <JobDescriptionCSS>
        <MaxWidthContainerCSS>
          <Description />
        </MaxWidthContainerCSS>
      </JobDescriptionCSS>
    </Layout>
  );
};

export default JobDescription;
