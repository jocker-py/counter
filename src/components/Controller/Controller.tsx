import React, {FC, useState} from "react";
import s from "./Counter.module.css";
import {Button} from "../Button/Button";
import {Screen} from "../Screen/Screen";

type ControllerPropsType = {
  minValue: number;
  maxValue: number;
}

const Controller: FC<ControllerPropsType> = ({minValue, maxValue}) => {
  const [value, setValue] = useState(minValue);
  const reset = () => setValue(minValue);
  const increment = () => setValue(value >= maxValue ? maxValue : value + 1);
  const decrement = () => setValue(value <= minValue ? minValue : value - 1);
  return (
    <div className={s.container}>
      <Screen value={value} error={value >= maxValue}/>
      <div className={s.buttons}>
        <Button callback={decrement}
                disabled={value <= minValue}
                bType={"red"}>-</Button>
        <Button callback={reset}
                disabled={value <= minValue}>reset</Button>
        <Button callback={increment}
                disabled={value >= maxValue}
                bType={"green"}>+</Button>
      </div>
    </div>
  )
};

export default Controller;