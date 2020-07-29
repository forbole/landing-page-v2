import React, { useState } from "react";
import { useTranslation } from "i18n";
import { PieChart } from "react-minimal-pie-chart";

const fakeData = [
  { title: "One", value: 10, color: "#E38627" },
  { title: "Two", value: 15, color: "#C13C37" },
  { title: "Three", value: 20, color: "#6A2135" },
  { title: "Four", value: 20, color: "pink" },
];

const Chart = () => {
  const { t } = useTranslation("stake_now");
  const [selected, setSelected] = useState<number | undefined>(3);

  const lineWidth = 50;
  const segmentsStyle = { transition: "stroke .3s", cursor: "pointer" };

  return (
    <PieChart
      style={{
        fontSize: "8px",
      }}
      data={fakeData}
      radius={PieChart.defaultProps.radius - 6}
      lineWidth={lineWidth}
      segmentsStyle={(index) => {
        return index === selected
          ? { ...segmentsStyle, strokeWidth: 25 }
          : segmentsStyle;
      }}
      animate
      label={() => `${t("cosmosHub")}`}
      labelPosition={0}
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
