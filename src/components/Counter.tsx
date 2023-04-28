import React, {useEffect, useState} from "react";
import {Controller} from "./Controller/Controller";
import {Settings} from "./Settings/Settings";
import s from "./Counter.module.css";

function createMessage(minValue: number, maxValue: number) {
  const SET_MESSAGE_TEXT = "enter values and press 'set'";
  const INCORRECT_VALUES = "incorrect values";
  if(minValue >= maxValue || minValue < 0) {
    return {error: true, text: INCORRECT_VALUES};
  }
  return {error: false, text: SET_MESSAGE_TEXT};
}

export type ValuesType = {
  minValue: number
  maxValue: number
}

export type MessageType = {
  error: boolean
  text: string
}

export const Counter = () => {
  const [message, setMessage] = useState<MessageType>({
    error: false,
    text: "",
  });
  const [values, setValues] = useState<ValuesType>({
    minValue: 0,
    maxValue: 1,
  });

  useEffect(() => {
    const data = localStorage.getItem('values');
    if(data) {
      const values = JSON.parse(data);
      setValues(values);
    }
  }, [])

  const acceptChanges = () => {
    const data = JSON.stringify(values);
    localStorage.setItem('values', data);
    setMessage({...message, text: ""});
  };

  function changeMaxValue(maxValue: number) {
    setValues({...values, maxValue});
    setMessage(createMessage(values.minValue, maxValue));
  }

  function changeMinValue(minValue: number) {
    setValues({...values, minValue});
    setMessage(createMessage(minValue, values.maxValue));
  }

  return (
    <div className={s.container}>
      <Controller {...values} {...message}/>
      <Settings {...values} error={message.error}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                acceptChanges={acceptChanges}/>
    </div>
  );
};