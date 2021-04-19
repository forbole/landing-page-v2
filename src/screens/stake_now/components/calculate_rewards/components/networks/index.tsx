import React, { useState } from "react";
import classNames from "classnames";
import { Dropdown } from "semantic-ui-react";
import Select from "react-select";
import { useTranslation } from "i18n";
import { getNetworkInfo } from "@src/utils/network_info";
import { calculatorKeys } from "./config";
import { Button, NetworkChoicesCSS } from "./styles";
import { INetworkProps } from "./interfaces";
import { ParagraphTitleCSS } from "../../styles";

// const Dropdown = (props: any) => {
//   console.log(props);
//   const { options } = props;
//   console.log(options);
//   const [selectedOption, setSelectedOption] = useState(options[0].value);
//   return (
//     <select
//       value={selectedOption}
//       onChange={(e) => setSelectedOption(e.target.value)}
//     >
//       {options.map((o) => (
//         <option key={o.value} value={o.value}>
//           {o.label}
//         </option>
//       ))}
//     </select>
//   );
// };

const image = (image = "/static/images/icons/cosmos-hub.png") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    background: `url(${image})`,
    //borderRadius: 10,
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
    const color = "rgba(189, 8, 28, 1)";
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? color
        : isFocused
        ? "rgba(152, 152, 152, 1)"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? color
          ? "white"
          : "black"
        : color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        background:
          !isDisabled &&
          (isSelected ? data.image : "/static/images/icons/cosmos-hub.png"),
      },
      ":before": {
        background: `url(${data.image})`,
        //borderRadius: 10,
        content: '" "',
        display: "block",
        //marginRight: 8,
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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOnChange = (data) => {
    for (let i = 0; i < networkData.length; i++) {
      if (data.key == networkData[i].key) {
        setSelectedOption(data.key);
        setSelectedToken(data.key);
      }
    }
  };

  return (
    <div>
      <ParagraphTitleCSS>{t("selectNetwork")}</ParagraphTitleCSS>
      {/* <Dropdown
        placeholder="Select Network"
        //value={selectedOption}
        fluid
        //multiple
        selection
        options={networkData}
        //onChange={setSelectedOPtion}
        //onSearchChange={handleOnChange}
        // className={classNames({ active: x.key == selectedToken })}
      /> */}
      <Select
        defaultValue={selectedOption}
        onChange={handleOnChange}
        options={networkData}
        styles={imageStyles}
      />
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
            <img src={x.image} />
            <p>{x.name}</p>
          </Button>
        ))}
      </NetworkChoicesCSS>
    </div>
  );
};

export default Networks;
