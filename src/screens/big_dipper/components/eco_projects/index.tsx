import React from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { EcoProjectsCSS, ProjectsGridCSS, MainContentCSS } from "./styles";
import { networkKeys } from "./config";
import { Network } from "@components";
import { getNetworkInfo } from "@src/utils/network-info";

export const EcoProjects = () => {
  const { t } = useTranslation("big_dipper");
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  return (
    <EcoProjectsCSS>
      <MainContentCSS>
        <h3>{t("supportedBlockchains")}</h3>
        <ProjectsGridCSS>
          {networkData.map((x) => (
            <Link href={`/networks/${x.key}`} key={x.name}>
              <a>
                <Network name={x.name} image={x.image} nameKey={x.key} />
              </a>
            </Link>
          ))}
        </ProjectsGridCSS>
      </MainContentCSS>
    </EcoProjectsCSS>
  );
};

export default EcoProjects;
