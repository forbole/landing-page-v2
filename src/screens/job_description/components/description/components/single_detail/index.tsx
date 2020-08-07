import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { useTranslation } from "i18n";
import { SingleDetailCSS } from "./styles";

const SingleDetail = (props: any) => {
  const { t } = useTranslation("job_description");
  const { title, details = "" } = props;

  const sanitize = DOMPurify.sanitize;

  return (
    <SingleDetailCSS>
      <h3>{t(title)}</h3>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: sanitize(details) }}
      ></div>
    </SingleDetailCSS>
  );
};

export default SingleDetail;
