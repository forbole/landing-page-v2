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

const image = (image = "/static/images/icons/cosmos-hub.png") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    background: `url(${image})`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 30,
    width: 30,
    backgroundSize: "contain",
  },
});

const imageStyles = {
  control: (styles) => ({ ...styles, background: "white" }),
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
  input: (styles) => ({ ...styles, ...image() }),
  placeholder: (styles) => ({ ...styles, ...image() }),
  singleValue: (styles, { data }) => ({ ...styles, ...image(data.image) }),
};

const Networks = (props: INetworkProps) => {
  const { t } = useTranslation("stake_now");
  const { selectedToken, setSelectedToken } = props;
  const networkData = calculatorKeys.map((x) => getNetworkInfo(x));
  const [selectedOption, setSelectedOption] = useState(networkData[2]);

  const handleOnChange = (data) => {
    for (let i = 0; i < networkData.length; i++) {
      if (data.key == networkData[i].key) {
        setSelectedOption(data.key);
        setSelectedToken(data.key);
      }
    }
  };

  return (
    <NetworksCSS>
      <ParagraphTitleCSS>{t("selectNetwork")}</ParagraphTitleCSS>
      <NoSSR>
        <Select
          defaultValue={selectedOption}
          placeholder={selectedOption}
          onChange={handleOnChange}
          options={networkData}
          styles={imageStyles}
        />
      </NoSSR>
      <NetworkChoicesCSS>
        {networkData.map((x) => (
          <Button
            key={x.name}
            onClick={() => {
              setSelectedToken(x.key);
              setSelectedOption(x.key);
            }}
            className={classNames({ active: x.key == selectedToken })}
          >
            <p>{x.denom}</p>
          </Button>
        ))}
      </NetworkChoicesCSS>
    </NetworksCSS>
  );
};

export default Networks;
