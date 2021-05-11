import React, { useState } from "react";
import classNames from "classnames";
import { NoSSR } from "@components";
import Select from "react-select";
import { useTranslation } from "i18n";
import { getNetworkInfo } from "@src/utils/network_info";
import { calculatorKeys } from "./config";
import { NetworksCSS, Button, NetworkChoicesCSS } from "./styles";
import { INetworkProps } from "./interfaces";
import { ParagraphTitleCSS } from "../../styles";

const image = (image) => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    background: `url(${image})`,
    content: '" "',
    display: image == "none" ? "none" : "block",
    marginRight: 8,
    height: 30,
    width: 30,
    backgroundSize: "contain",
  },
});

const imageStyles = (value) => ({
  control: (provided, state) => ({ ...provided, background: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "white"
        : isFocused
        ? "white"
        : "white",
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "white"
          ? "rgba(0, 0, 0, 1)"
          : "black"
        : "rgba(0, 0, 0, 1)",
      cursor: isDisabled ? "not-allowed" : "default",
      alignItems: "center",
      display: "flex",

      ":hover": {
        ...styles[":hover"],
        backgroundColor: isDisabled
          ? "#ccc"
          : isSelected
          ? color
            ? color
            : "black"
          : color,
        color: "white",
      },

      ":active": {
        ...styles[":active"],
        background: !isDisabled && (isSelected ? data.image : "white"),
      },
      ":before": {
        background: `url(${data.image})`,
        content: '" "',
        display: "block",
        marginRight: 8,
        height: 30,
        width: 30,
        backgroundSize: "contain",
      },
    };
  },
  input: (styles) => ({ ...styles, ...image(value.image) }),
  placeholder: (styles) => ({ ...styles, ...image("none") }),
  singleValue: (styles, { data }) => ({ ...styles, ...image(data.image) }),
});

const Networks = (props: INetworkProps) => {
  const { t } = useTranslation("stake_now");
  const { selectedToken, setSelectedToken } = props;
  const networkData = calculatorKeys.map((x) => getNetworkInfo(x));

  const displayItem = (selected) => {
    const item = networkData.find((x) => x.name === selected.name);
    return item ? item : { name: "", label: "" };
  };

  const onChange = (e) => {
    setSelectedToken(e);
  };

  return (
    <NetworksCSS>
      <ParagraphTitleCSS>{t("selectNetwork")}</ParagraphTitleCSS>
      <NoSSR>
        <Select
          placeholder={selectedToken == "" ? "Please Select..." : selectedToken}
          options={networkData}
          styles={imageStyles(selectedToken)}
          onChange={onChange}
          value={
            selectedToken == "" ? "Please Select" : displayItem(selectedToken)
          }
        />
      </NoSSR>
      <NetworkChoicesCSS>
        {networkData.map((x) => (
          <Button
            key={x.name}
            onClick={() => {
              setSelectedToken(x);
            }}
            className={classNames({ active: x == selectedToken })}
          >
            <p>{x.denom}</p>
          </Button>
        ))}
      </NetworkChoicesCSS>
    </NetworksCSS>
  );
};

export default Networks;
