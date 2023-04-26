import React, {useState} from "react";
import {Controller} from "./Controller/Controller";
import {Settings} from "./Settings/Settings";


export const Counter = () => {
  const [settings, setSettings] = useState({
    minValue: 0,
    maxValue: 1,
  });
  function setMinValue(value: number){
    setSettings({...settings, minValue: value});
  }
  return (
    <>
      <Controller {...settings}/>
      <Settings/>
    </>
  );
};