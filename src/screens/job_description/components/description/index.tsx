import React from "react";
import { useTranslation } from "i18n";
import { Button } from "semantic-ui-react";
import { DescriptionCSS } from "./styles";
import { fakeData } from "../../config";
import SingleDetail from "./components/single_detail";
const data = fakeData[0];

const Description = () => {
  const { t } = useTranslation("job_description");
  return (
    <DescriptionCSS>
      <h2>{data.position}</h2>
      <hr />
      <SingleDetail
        title="responsibilities"
        details={data.details.responsibility}
      />
      <SingleDetail title="requirements" details={data.details.requirements} />
      <SingleDetail title="other" details={data.details.other} />
      <SingleDetail title="contacts" details={data.details.contact} />
      <Button>{t("applyNow")}</Button>
    </DescriptionCSS>
  );
};

export default Description;
