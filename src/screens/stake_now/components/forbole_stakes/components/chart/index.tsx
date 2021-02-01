import React from "react";
import { useTranslation } from "i18n";
import { PieChart } from "react-minimal-pie-chart";
import { useForboleStakesHook } from "../../hooks";
import { moneyToInt } from "@utils/convert_to_money";
import { cosmosData, irisData, vsysData } from "../../config";

const Chart = (props: any) => {
  const { t } = useTranslation("stake_now");
  const { selected, setSelected } = props;
  const hookProps = useForboleStakesHook();
  const { cosmosNetwork, iris, vsys, totalUSD } = hookProps;

  const networkData = [
    {
      title: "cosmosHub",
      value:
        (moneyToInt(cosmosNetwork[0].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[0].color,
    },
    {
      title: "terra",
      value:
        (moneyToInt(cosmosNetwork[1].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[1].color,
    },
    {
      title: "kava",
      value:
        (moneyToInt(cosmosNetwork[2].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[2].color,
    },
    {
      title: "likecoin",
      value:
        (moneyToInt(cosmosNetwork[3].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[3].color,
    },
    {
      title: "starname",
      value:
        (moneyToInt(cosmosNetwork[4].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[4].color,
    },
    {
      title: "band-protocol",
      value:
        (moneyToInt(cosmosNetwork[5].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[5].color,
    },
    {
      title: "akash",
      value:
        (moneyToInt(cosmosNetwork[6].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[6].color,
    },
    {
      title: "eMoney",
      value:
        (moneyToInt(cosmosNetwork[7].totalMarketValue) / totalUSD) * 100 || 10,
      color: cosmosData[7].color,
    },
    {
      title: "irisnet",
      value: (moneyToInt(iris.totalMarketValue) / totalUSD) * 100 || 10,
      color: irisData[0].color,
    },
    {
      title: "vsys",
      value: (moneyToInt(vsys.totalMarketValue) / totalUSD) * 100 || 10,
      color: vsysData[0].color,
    },
  ];

  const lineWidth = 50;
  // change to pointer in future
  const segmentsStyle = { transition: "stroke .3s", cursor: "initial" };

  return (
    <PieChart
      style={{
        fontSize: "8px",
      }}
      data={networkData}
      radius={PieChart.defaultProps.radius - 6}
      lineWidth={lineWidth}
      segmentsStyle={(index) => {
        return index === selected
          ? { ...segmentsStyle, strokeWidth: 25 }
          : segmentsStyle;
      }}
      animate
      animationDuration={500}
      animationEasing="ease-out"
      label={() =>
        `${t(
          networkData && networkData[selected] && networkData[selected].title
        )}`
      }
      labelPosition={0}
      startAngle={0}
      onMouseOver={(_, index) => {
        setSelected(index === selected ? 0 : index);
      }}
      onMouseOut={() => {
        setSelected(0);
      }}
      labelStyle={{
        fill: "#fff",
        opacity: 0.75,
        pointerEvents: "none",
        fontWeight: 300,
        fontSize: "0.3rem",
      }}
    />
  );
};

export default Chart;
