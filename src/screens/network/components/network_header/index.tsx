import React from "react";
import { NetworkHeaderCSS } from "./styles";
import { getNetworkInfo } from "@utils/network-info";

function NetworkHeader(props: any) {
  const { networkKey = "" } = props;
  const data = getNetworkInfo(networkKey);
  console.log(data, "my data");
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
