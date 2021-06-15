import React from "react";
import Image from "next/image";
import { INetworkProps } from "./interfaces";
import { BlockchainCSS } from "./styles";

const Blockchain = (props: INetworkProps) => {
  const { image } = props;

  return (
    <BlockchainCSS>
      <div className="image-container">
        <Image
          src={image}
          alt="Blockchain Icon"
          className="image"
          layout="fill"
        />
      </div>
    </BlockchainCSS>
  );
};

export default Blockchain;
