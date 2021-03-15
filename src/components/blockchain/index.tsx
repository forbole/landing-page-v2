import React from "react";
import { INetworkProps } from "./interfaces";
import { BlockchainCSS } from "./styles";

const Blockchain = (props: INetworkProps) => {
  const { image } = props;
  console.log(image);

  return (
    <BlockchainCSS>
      <img src={image} />
    </BlockchainCSS>
  );
};

export default Blockchain;
