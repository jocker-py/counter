import React from "react";
import s from "./Settings.module.css";
import {Button} from "../Button/Button";
import {NumInput} from "../NumInput/NumInput";
import {acceptSettings, changeSettings} from "../../store/reducers/counterReducer";
import {useAppDispatch, useTypedSelector} from "../../utils/useTypedSelector";


export const Settings = () => {
  const dispatch = useAppDispatch();
  const {minValue, maxValue, error} = useTypedSelector(state => state.counter);

  const changeMaxValue = (maxValue: number) =>  dispatch(changeSettings(minValue, maxValue))
  const changeMinValue = (minValue: number) => dispatch(changeSettings(minValue, maxValue))
  const acceptNewValues = () => dispatch(acceptSettings());

  const isMinError = minValue >= maxValue || minValue < 0;
  const isMaxError = minValue >=  maxValue;

  return (
    <div className={s.settings}>
      <div className={s.container}>
        <NumInput title={"min"} value={minValue} onChange={changeMinValue} error={isMinError}/>
        <NumInput title={"max"} value={maxValue} onChange={changeMaxValue} error={isMaxError}/>
      </div>
      <div>
        <Button callback={acceptNewValues} disabled={error}>Set</Button>
      </div>
    </div>
  );
};

