import React, {FC} from "react";
import s from "./Screen.module.css";
import {useTypedSelector} from "../../utils/useTypedSelector";

type ScreenPropsType = {
  isEnd: boolean
}

export const Screen: FC<ScreenPropsType> = ({isEnd}) => {
  const {currentValue, text, error} = useTypedSelector(state => state.counter);
  const textStyle = `${s.text} ${error && s.error}`;
  const valueStyle = `${s.value} ${isEnd && s.end}`;
  const containerStyle = `${s.container} ${error && s.errorContainer}`;
  return (
    <div className={containerStyle}>
      {text && <div className={textStyle}>{text}</div>}
      {!text && <div className={valueStyle}>{currentValue}</div>}
    </div>
  );
};