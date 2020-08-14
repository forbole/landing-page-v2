import React from "react";
import { Next } from "@icons";
import { ArrowCSS } from "./styles";

const CustomArrows = ({ onClick, direction }: any) => {
  return (
    <ArrowCSS className={direction} onClick={onClick}>
      <Next />
    </ArrowCSS>
  );
};

export default CustomArrows;
