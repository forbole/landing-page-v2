import React from "react";
import { useTranslation } from "i18n";
import {
  BlockchainProjectsCSS,
  ProjectsGridCSS,
  MainContentCSS,
} from "./styles";
import { networkKeys } from "./config";
import { Blockchain } from "@components";
import { getNetworkInfo } from "@src/utils/network_info";

export const BlockchainProjects = () => {
  const { t } = useTranslation("products");
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  return (
    <BlockchainProjectsCSS>
      <MainContentCSS>
        <h3>{t("supportedBlockchains")}</h3>
        <ProjectsGridCSS>
          {networkData.map((x) => (
            <a
              href={x?.bigDipper ?? "/"}
              key={x.name}
              target="_blank"
              rel="noreferrer"
            >
              <Blockchain image={x.image} nameKey={x.key} />
            </a>
          ))}
        </ProjectsGridCSS>
      </MainContentCSS>
    </BlockchainProjectsCSS>
  );
};

export default BlockchainProjects;
