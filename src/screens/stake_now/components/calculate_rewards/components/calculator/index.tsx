import React from "react";
import { Icon } from "semantic-ui-react";
import { useTranslation } from "i18n";
import { ParagraphTitleCSS } from "../../styles";
import { CalculatorCSS, Input, StatsDetailsCSS } from "./styles";
import { ICalculatorProp } from "./interfaces";
import Detail from "./components/detail";

const Calculator = (props: ICalculatorProp) => {
  const { t } = useTranslation("stake_now");
  const {
    handleCalculations,
    totalEarnings,
    handleChange,
    tokens,
    loading,
  } = props;
  const totalEarningKeys = Object.keys(totalEarnings);
  return (
    <CalculatorCSS>
      <ParagraphTitleCSS>{t("enterTokens")}</ParagraphTitleCSS>
      <Input
        fluid
        onChange={handleChange}
        placeholder={"0 Amount"}
        action={{
          content: loading ? (
            <Icon loading fitted name="asterisk" />
          ) : (
            t("calculate")
          ),
          onClick: handleCalculations,
        }}
        value={tokens?.display}
      />
      <StatsDetailsCSS>
        {totalEarningKeys.map((x, i) => (
          <React.Fragment key={x}>
            <Detail
              title={t(x)}
              amount={totalEarnings[x].amount}
              tokens={totalEarnings[x].tokens}
            />
            {i !== totalEarningKeys.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </StatsDetailsCSS>
    </CalculatorCSS>
  );
};

export default Calculator;
