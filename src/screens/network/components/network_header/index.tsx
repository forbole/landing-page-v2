import React from "react";
import { NetworkHeaderCSS } from "./styles";
import { getNetworkInfo } from "@src/utils/network_info";

function NetworkHeader(props: any) {
  const { networkKey = "" } = props;
  const data = getNetworkInfo(networkKey);

  return (
    <NetworkHeaderCSS>
      <div className="wrap">
        <img className="logo" src={data.image} alt={data.name}></img>
        <h2>{data.name}</h2>
      </div>
    </NetworkHeaderCSS>
  );
}

export default NetworkHeader;
