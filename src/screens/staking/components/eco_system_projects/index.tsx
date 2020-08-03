import React from "react";
import { useTranslation } from "i18n";
import {
  EcoSystemProjectsCSS,
  ProjectsGridCSS,
  MainContentCSS,
} from "./styles";
import { networkData } from "./config";
import Network from "./components/network";

export const EcoSystemProjects = () => {
  const { t } = useTranslation("staking");
  return (
    <EcoSystemProjectsCSS>
      <MainContentCSS>
        <h3>{t("ecosystemProjects")}</h3>
        <p>{t("ecosystemProjectsDetails")}</p>
        <ProjectsGridCSS>
          {networkData.map((x) => (
            <Network key={x.name} name={x.name} image={x.image} />
          ))}
        </ProjectsGridCSS>
      </MainContentCSS>
    </EcoSystemProjectsCSS>
  );
};

export default EcoSystemProjects;
