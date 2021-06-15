import React from "react";
import { useTranslation } from "i18n";
import Image from "next/image";
import classNames from "classnames";
import { Button, NetworkCSS } from "./styles";
import { INetworkProps } from "./interfaces";

const Network = (props: INetworkProps) => {
  const {
    image,
    name,
    disable,
    // amount = "---",
    delegate = process.env.NEXT_PUBLIC_URL,
  } = props;
  const { t } = useTranslation("stake_now");
  console.log(`image`, image);
  //const formattedAmount = amount === "---" ? amount : convertToMoney(amount);
  return (
    <a href={disable ? null : delegate} target="_blank" rel="noreferrer">
      <NetworkCSS>
        <div className="image-container">
          {/* <img src={image} /> */}
          <Image
            // loader={myLoader}
            src={image}
            alt="Feature Image"
            // layout="responsive"
            className="image"
            // width={200}
            // height={100}
            layout="fill"
            //objectFit="cover"
          />
        </div>
        <p className="name">{name}</p>
        <div className="flex">
          <p className="amount"></p>
          <div className="button-container">
            <Button className={classNames({ disabled: disable == true })}>
              {disable ? t("coming") : t("stakeNow")}
            </Button>
          </div>
        </div>
      </NetworkCSS>
    </a>
  );
};

export default Network;
