import React from "react";
import { useTranslation } from "i18n";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { TwitterCSS } from "./styles";

const Twitter = () => {
  const { t } = useTranslation("blog");

  return (
    <TwitterCSS>
      <h3>{t("twitter")}</h3>
      <TwitterTimelineEmbed
        noHeader
        sourceType="profile"
        screenName="forbole"
        options={{ height: 500 }}
      />
    </TwitterCSS>
  );
};

export default Twitter;
