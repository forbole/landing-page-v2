import React from "react";

// finalize once more details are given
const HubDetail = (props: any) => {
  const { title = "", atom = 0, percent = 0 } = props;

  return (
    <div>
      <p>{title}</p>
      <div>
        <p>
          {atom} {t("atom")}
        </p>
        <p>{percent}%</p>
      </div>
    </div>
  )
}

export default HubDetail;
