import React from "react";
import { Layout } from "@components";
import { theme } from "@styles";
import { JobDescriptionCSS, MaxWidthContainerCSS } from "./styles";
import { Description, Sidebar } from "./components";

const { colors } = theme;

const JobDescription = () => {
  return (
    <Layout navColor={colors.gray600} mobileNavColor={colors.gray600}>
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
