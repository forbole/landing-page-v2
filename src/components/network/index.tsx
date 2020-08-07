import React from "react";
import { INetworkProps } from "./interfaces";
import { NetworkCSS } from "./styles";

const Network = (props: INetworkProps) => {
  const { name, image } = props;

  return (
    <NetworkCSS>
      <img src={image} />
      <p>{name}</p>
    </NetworkCSS>
  );
};

export default Network;
