import React, {FC, useEffect, useState} from "react";
import s from "./Controller.module.css";
import {Button} from "../Button/Button";
import {Screen} from "../Screen/Screen";
import {ValuesType} from "../Counter";

type ControllerPropsType = ValuesType;
export const Controller: FC<ControllerPropsType> = ({minValue, maxValue}) => {
  const [value, setValue] = useState(minValue);
  const reset = () => setValue(minValue);
  const increment = () => setValue( value + 1);
  const decrement = () => setValue(value - 1);
  const isMinError = value <= minValue;
  const isMaxError = value >= maxValue;
  return (
    <div className={s.container}>
      <Screen value={value} maxValue={maxValue}/>
      <div className={s.buttons}>
        <Button callback={decrement}
                disabled={isMinError}
                bType={"red"}>-</Button>
        <Button callback={reset}
                disabled={isMinError}>reset</Button>
        <Button callback={increment}
                disabled={isMaxError}
                bType={"green"}>+</Button>
      </div>
    </div>
  )
};
