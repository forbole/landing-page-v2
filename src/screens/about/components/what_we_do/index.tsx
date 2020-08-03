import React from "react";
import { useTranslation } from "i18n";
import { WhatWeDoCSS, PillarCSS } from "./styles";
import { pillarData } from "./config";

const WhatWeDo = () => {
  const { t } = useTranslation("about");
  return (
    <WhatWeDoCSS>
      <div className="max-width-container">
        <h3>{t("whatWeDo")}</h3>
        <p>{t("whatWeDoDetailsOne")}</p>
        <p>{t("whatWeDoDetailsTwo")}</p>
        <p>{t("whatWeDoDetailsThree")}</p>
        <ul>
          {pillarData.map((x) => (
            <PillarCSS key={x.name}>
              <p>
                <span className="title">{t(x.name)}&nbsp;</span>
                {t(x.detail)}
              </p>
            </PillarCSS>
          ))}
        </ul>
        <p>{t("whatWeDoDetailsFour")}</p>
      </div>
    </WhatWeDoCSS>
  );
};

export default WhatWeDo;
