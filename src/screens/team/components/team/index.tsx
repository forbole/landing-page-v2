import React from "react";
import { useTranslation } from "i18n";
import {
  TeamCSS,
  TeamHeadingContainerCSS,
  TeamGridCSS,
  MaxWidthContainerCSS,
} from "./styles";
import Member from "./components/member";
import { membersData } from "./config";

const TeamMembers = () => {
  const { t } = useTranslation("team");

  return (
    <TeamCSS>
      <MaxWidthContainerCSS>
        <TeamHeadingContainerCSS>
          <h3>{t("teamMembers")}</h3>
        </TeamHeadingContainerCSS>
        <TeamGridCSS>
          {membersData.map((x, i) => (
            <Member
              key={i}
              name={x.name}
              position={t(x.position)}
              image={x.image}
              links={x.links}
            />
          ))}
        </TeamGridCSS>
      </MaxWidthContainerCSS>
    </TeamCSS>
  );
};

export default TeamMembers;
