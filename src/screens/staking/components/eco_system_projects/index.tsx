import React from "react";
import { useTranslation } from "i18n";
import {
  EcoSystemProjectsCSS,
  ProjectsGridCSS,
  MainContentCSS,
} from "./styles";
import { networkKeys } from "./config";
import { Network } from "@components";
import { getNetworkInfo } from "@utils/network-info";

export const EcoSystemProjects = () => {
  const { t } = useTranslation("staking");
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  return (
    <EcoSystemProjectsCSS>
      <MainContentCSS>
        <h3>{t("ecosystemProjects")}</h3>
        <p>{t("ecosystemProjectsDetails")}</p>
        <ProjectsGridCSS>
          {networkData.map((x) => (
            <Network
              key={x.name}
              name={x.name}
              image={x.image}
              nameKey={x.key}
            />
          ))}
        </ProjectsGridCSS>
      </MainContentCSS>
    </EcoSystemProjectsCSS>
  );
};

export default EcoSystemProjects;
