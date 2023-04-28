import React, {FC} from "react";
import s from "./Screen.module.css";

type ScreenProps = {
  value: number;
  error: boolean;
  text: string;
  maxValue: number;
}
export const Screen: FC<ScreenProps> = ({value, error, text, maxValue}) => {
  const isMoreMax = value >= maxValue;
  const textStyle = `${s.text} ${error && s.error}`;
  const valueStyle = `${s.value} ${isMoreMax && s.end}`;
  const containerStyle = `${s.container} ${error && s.errorContainer}`;
  return (
    <div className={containerStyle}>
      <div className={ text ? textStyle : valueStyle}>{text ? text : value}</div>
    </div>
  );
};