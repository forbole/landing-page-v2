import React from "react";
import { useTranslation } from "i18n";
import {
  BodyCSS
} from "./styles";
import MooncakeDetails from "../mooncake_details";
import MooncakeImg from "../mooncake_img";

const Mobile = () => {
  const { t } = useTranslation("desmos");

  return (
    <BodyCSS>
      <MooncakeImg />
      <MooncakeDetails />
    </BodyCSS>
  );
};

export default Mobile;
