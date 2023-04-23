import React, {FC} from "react";
import s from "./Screen.module.css";

type ScreenProps = {
  value: number;
  error: boolean;
}
export const Screen: FC<ScreenProps> = ({value, error}) => {
  return (
    <div className={`${s.container} ${ error && s.errorContainer}`}>
      <div className={`${s.value} ${ error && s.errorValue}`}>{value}</div>
    </div>
  );
};
