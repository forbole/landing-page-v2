import React from "react";
import { useTranslation } from "i18n";
import { EcoProjectsCSS, ProjectsGridCSS, MainContentCSS } from "./styles";
import { networkData } from "./config";
import Network from "../../../../components/network";

export const EcoProjects = () => {
  const { t } = useTranslation("big_dipper");
  return (
    <EcoProjectsCSS>
      <MainContentCSS>
        <h3>{t("ecosystemProjects")}</h3>
        <p>{t("ecosystemProjectsDescription")}</p>
        <ProjectsGridCSS>
          {networkData.map((x) => (
            <Network key={x.name} name={x.name} image={x.image} />
          ))}
        </ProjectsGridCSS>
      </MainContentCSS>
    </EcoProjectsCSS>
  );
};

export default EcoProjects;
