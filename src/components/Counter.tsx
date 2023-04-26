import React, {useState} from "react";
import {Controller} from "./Controller/Controller";
import {Settings} from "./Settings/Settings";

type SettingsType = {
  minValue: number
  maxValue: number
}

export const Counter = () => {
  const [settings, setSettings] = useState<SettingsType>({
    minValue: 0,
    maxValue: 1,
  });
  return (
    <>
      <Controller {...settings}/>
      <Settings/>
    </>
  );
};