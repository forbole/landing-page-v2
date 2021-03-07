import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { TeamHeader, TeamMembers, Opportunities } from "./components";

const Team = () => {
  const { t } = useTranslation("team");
  return (
    <Layout
      title={t("title")}
      description={t("description")}
      image="/static/images/assets/Facebook-who-we-are.png"
      twitterImage="/static/images/assets/Twitter-who-we-are.png"
    >
      <TeamHeader />
      <TeamMembers />
      <Opportunities />
    </Layout>
  );
};

export default Team;
