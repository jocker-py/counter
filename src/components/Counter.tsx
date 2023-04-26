import React, {} from "react";
import Controller from "./Controller";


export const Counter = () => {
  const values = {
    minValue: 0,
    maxValue: 1,
  }
  return(
    <Controller {...values}/>
  )
};