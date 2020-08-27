import React, { useState } from "react";
import { ProgressBarCSS } from "./styles";
import { Icon } from "semantic-ui-react";

import "./styles";

const ProgressBar = () => {
  const value = 50;
  const c = Math.PI * (90 * 2);
  const display = ((100 - value) / 100) * c;
  console.log(display, "display");
  const [count, setCount] = useState(0);
  return (
    <ProgressBarCSS>
      <div className="App">
        <div>
          <svg
            id="svg"
            width="100"
            height="100"
            viewport="0 0 50 50"
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
              onAnimationIteration={() => setCount(count + 1)}
            ></circle>
          </svg>
          <Icon name="arrow right" />
        </div>
      </div>
    </ProgressBarCSS>
  );
};

export default ProgressBar;
