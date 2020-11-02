import React from "react";
import { useTranslation } from "i18n";
import {
  EcoSystemProjectsCSS,
  ProjectsGridCSS,
  MainContentCSS,
} from "./styles";
import { networkKeys } from "./config";
import { Network } from "@components";
import { getNetworkInfo } from "@src/utils/network_info";

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
            // <Link href={`/networks/${x.key}`} key={x.name}>
            // <a>
            <Network
              name={x.name}
              image={x.image}
              nameKey={x.key}
              key={x.name}
            />
            // </a>
            // </Link>
          ))}
        </ProjectsGridCSS>
      </MainContentCSS>
    </EcoSystemProjectsCSS>
  );
};

export default EcoSystemProjects;
