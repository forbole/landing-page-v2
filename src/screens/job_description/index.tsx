import React from "react";
import { Layout } from "@components";
import { JobDescriptionCSS, MaxWidthContainerCSS } from "./styles";
import { Description, Sidebar } from "./components";

const JobDescription = () => {
  return (
    <Layout>
      <JobDescriptionCSS>
        <MaxWidthContainerCSS>
          <Description />
          <Sidebar />
        </MaxWidthContainerCSS>
      </JobDescriptionCSS>
    </Layout>
  );
};

export default JobDescription;
