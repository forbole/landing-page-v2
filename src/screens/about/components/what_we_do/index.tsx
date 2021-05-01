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
        <p className="lastP">{t("whatWeDoDetailsTwo")}</p>
        <ul>
          {pillarData.map((x) => (
            <PillarCSS key={x.name}>
              <p>
                <img src={x.image} alt="Pillar Icon" />
                <span className="title">{t(x.name)}&nbsp;</span>
                {/* {t(x.name)} */}
              </p>
            </PillarCSS>
          ))}
        </ul>
      </div>
    </WhatWeDoCSS>
  );
};

export default WhatWeDo;
