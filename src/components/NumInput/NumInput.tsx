import React, {ChangeEvent, FC} from "react";
import s from "./NumInput.module.css";

type NumInputPropsType = {
  title: string
  error: boolean
  value: number
  onChange: (value: number) => void
}

export const NumInput: FC<NumInputPropsType> = ({title, error, value, onChange}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    onChange(+e.target.value);
  }
  const inputStyle = `${s.input} ${error && s.error}`;
  const inputTitle = `${title[0].toUpperCase() + title.slice(1)}: ` ;
  return (
    <div className={s.container}>
      <span className={s.title}>{inputTitle}</span>
      <div className={s.background}>
        <input type="number"
               value={value}
               className={inputStyle}
               onChange={onChangeHandler}/>
      </div>
    </div>
  )
}