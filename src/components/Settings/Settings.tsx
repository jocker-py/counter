import React, {FC} from "react";
import {Button} from "../Button/Button";
import {ValuesType} from "../Counter";
import s from "./Settings.module.css";
import {NumInput} from "../NumInput/NumInput";

type SettingsPropsType = ValuesType & {
  error: boolean
  acceptChanges: () => void
  changeMinValue: (minValue: number) => void
  changeMaxValue: (maxValue: number) => void
}

export const Settings: FC<SettingsPropsType> = ({
                                                  error,
                                                  minValue,
                                                  maxValue,
                                                  acceptChanges,
                                                  changeMinValue,
                                                  changeMaxValue,
                                                }) => {
  const isMoreMax = minValue >= maxValue;
  const isMinLessZero = minValue < 0;
  const isMaxLessZero = maxValue < 0;
  return (
    <div className={s.settings}>
      <div className={s.container}>
        <NumInput title={"min"}
                  value={minValue}
                  onChange={changeMinValue}
                  error={isMinLessZero || isMoreMax}/>
        <NumInput title={"max"}
                  value={maxValue}
                  onChange={changeMaxValue}
                  error={isMaxLessZero || isMoreMax}/>
      </div>
      <div>
        <Button callback={acceptChanges} disabled={error}>Set</Button>
      </div>
    </div>
  );
};

