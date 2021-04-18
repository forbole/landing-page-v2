import React, { useState } from "react";
import classNames from "classnames";
import { Dropdown } from "semantic-ui-react";
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

const Networks = (props: INetworkProps) => {
  const { t } = useTranslation("stake_now");
  const { selectedToken, setSelectedToken } = props;

  const networkData = calculatorKeys.map((x) => getNetworkInfo(x));
  const [selectedOption, setSelectedOption] = useState(networkData[0]);
  const handleSelect = (e) => {
    console.log(`target`, e.currentTarget.value);
    setSelectedToken(e.target.value);
  };
  const handleOnChange = (event, data) => {
    event.persist();
    console.log(`hi`, data);
    for (let i = 0; i < networkData.length; i++) {
      console.log(`data`, data);
      if (
        data.options[i].hasOwnProperty("text") &&
        event.target.innerText == data.options[i].text
      ) {
        setSelectedOption(data.options[i].key);
        setSelectedToken(data.options[i].key);
      }
    }

    if (event.value == "Select All") {
      console.log(event);
      console.log(event.target);
    }
    //console.log(`selected`, selectedOption);
  };
  console.log(`selected`, selectedOption, selectedToken);

  return (
    <div>
      <ParagraphTitleCSS>{t("selectNetwork")}</ParagraphTitleCSS>
      <Dropdown
        placeholder="Select Network"
        //value={networkData}
        fluid
        //multiple
        selection
        options={networkData}
        onChange={handleOnChange}
        // className={classNames({ active: x.key == selectedToken })}
      />
      <NetworkChoicesCSS>
        {networkData.map((x) => (
          <Button
            key={x.name}
            onClick={() => setSelectedToken(x.key)}
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
