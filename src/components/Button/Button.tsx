import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import s from "./Button.module.css";

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ButtonColorType = "red" | "green" | "blue";
type ButtonProps = DefaultButtonProps & {
  callback: () => void,
  bType?: ButtonColorType
};

export const Button: FC<ButtonProps> = ({bType, callback, className, ...otherProps}) => {
  const finalClassName = `${s.button} ${bType === "red" ? s.red :
    bType === "green" ? s.green : s.default} ${className ? className : ""}`;
  return <button onClick={callback} {...otherProps} className={finalClassName}/>;
};

