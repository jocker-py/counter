import React, {} from "react";
import {Controller} from "./Controller/Controller";
import {Settings} from "./Settings/Settings";


export const Counter = () => {
  const values = {
    minValue: 0,
    maxValue: 1,
  };
  return (
    <>
      <Controller {...values}/>
      <Settings/>
    </>
  );
};