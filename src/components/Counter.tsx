import React from "react";
import s from "./Counter.module.css";
import {Controller} from "./Controller/Controller";
import {Settings} from "./Settings/Settings";

export const Counter = () => {
  return (
    <div className={s.container}>
      <Controller/>
      <Settings/>
    </div>
  );
};