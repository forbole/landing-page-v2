import React from "react";
import Link from "next/link";
import { INetworkProps } from "./interfaces";
import { NetworkCSS } from "./styles";

const Network = (props: INetworkProps) => {
  const { name, image, nameKey } = props;

  return (
    <Link href={`/networks/${nameKey}`}>
      <a>
        <NetworkCSS>
          <img src={image} />
          <p>{name}</p>
        </NetworkCSS>
      </a>
    </Link>
  );
};

export default Network;
