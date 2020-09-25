import React, { useState } from "react";
import { ProgressBarCSS } from "./styles";
import { Icon } from "semantic-ui-react";

import "./styles";

const ProgressBar = (props: any) => {
  const { handleAnimation } = props;
  const value = 50;
  const c = Math.PI * (90 * 2);
  const display = ((100 - value) / 100) * c;
  return (
    <ProgressBarCSS>
      <div className="app" onClick={handleAnimation}>
        <div>
          <svg
            id="svg"
            width="100"
            height="100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="20"
              cx="50"
              cy="50"
              fill="transparent"
              strokeDasharray="565.48"
              strokeDashoffset={display}
            ></circle>
            <circle
              id="bar"
              r="20"
              cx="50"
              cy="50"
              fill="transparent"
              strokeDasharray="565.48"
              onAnimationIteration={handleAnimation}
            ></circle>
          </svg>
          <Icon name="arrow right" />
        </div>
      </div>
    </ProgressBarCSS>
  );
};

export default ProgressBar;
