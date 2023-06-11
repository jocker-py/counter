import React from "react";
import s from "./Controller.module.css";
import {Button} from "../Button/Button";
import {Screen} from "../Screen/Screen";
import {decrementValue, incrementValue, resetValue} from "../../store/reducers/counterReducer";
import {useAppDispatch, useTypedSelector} from "../../utils/useTypedSelector";


export const Controller = () => {
  const dispatch = useAppDispatch();
  const {currentValue, minValue, maxValue, text} = useTypedSelector(state => state.counter);

  const reset = () => dispatch(resetValue());
  const increment = () => dispatch(incrementValue());
  const decrement = () => dispatch(decrementValue());

  const isStart = currentValue <= minValue;
  const isEnd = currentValue >= maxValue;

  return (
    <div className={s.container}>
      <Screen isEnd={isEnd} />
      <div className={s.buttons}>
        <Button callback={decrement} disabled={isStart || !!text} bType={"red"}>-</Button>
        <Button callback={reset} disabled={isStart || !!text}>reset</Button>
        <Button callback={increment} disabled={isEnd || !!text} bType={"green"}>+</Button>
      </div>
    </div>
  )
};
